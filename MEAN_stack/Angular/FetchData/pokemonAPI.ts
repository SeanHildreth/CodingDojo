import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.showTask();
    // this.newTask();
    // this.updateTask();
    // this.deleteTask();
    this.getPokemon();
  }

  getTasks() {
    // our http response is an observable, store it in the variable tempObservable
    const tempObservable = this._http.get('/tasks');
    // subscribe to our observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }

  showTask() {
    const tempObservable = this._http.get('/task/5c09c3effe54053c5843423c');
    tempObservable.subscribe(data => console.log('Show this Task!', data));
  }

  getPokemon() {
    const raichu = this._http.get('https://pokeapi.co/api/v2/pokemon/26/');
    raichu.subscribe(data => {
      console.log(data.name + "'s abilities are " + data.abilities[0].ability.name, "and", data.abilities[1].ability.name, "and my favorite moves are", data.moves[15].move.name, "and", data.moves[16].move.name + ".");
      const ability = data.abilities[0].ability.name;
      const shared = this._http.get('https://pokeapi.co/api/v2/ability/' + ability + '/');
      shared.subscribe(data2 => {
        console.log(data2.pokemon.length + " Pokemon also have the " + ability + " ability!")
        for(let x in data2.pokemon) {
          console.log(data2.pokemon[x].pokemon.name);
          let pokemon = data2.pokemon[x].pokemon.name;
          const pokeabil = this._http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/');
          pokeabil.subscribe( data3 => {
            for(let y in data3.abilities) {
              console.log(pokemon + "'s also has " + data3.abilities[y].ability.name + " ability!")
            }
          })
        }
      });
    });

  }
}