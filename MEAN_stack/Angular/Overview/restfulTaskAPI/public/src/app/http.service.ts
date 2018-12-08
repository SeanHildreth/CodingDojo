import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
