import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes = [];
  gotCake: any;
  gotCakeDiv = false;
  newCake = {
    name: '',
    url: ''
  };
  editedCake: any;
  avg: any;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getCakes();
  }

  getCakes() {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['cakes'];
    });
  }

  showCake(id: String) {
    const observable = this._httpService.showCake(id);
    observable.subscribe(data => {
      this.gotCake = data;
      let sum = 0;
      for (let idx = 0; idx < this.gotCake.cake[0].ratings.length; idx++) {
        sum += this.gotCake.cake[0].ratings[idx].rating;
      }
      this.avg = Math.round(sum / this.gotCake.cake[0].ratings.length);
      this.gotCakeDiv = true;

    });
  }

  createCake() {
    const obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data => {
      this.newCake = {
        name: '',
        url: ''
      };
    });
    this.getCakes();
  }

  updateCake() {
    const obs = this._httpService.updateCake(this.editedCake);
    obs.subscribe(() => {
      this.editedCake = {};
    });
  }

  rateCake(cake) {
    const newRating = {
      rating: cake.newRating,
      rating_text: cake.newRating_text
    };
    const obs = this._httpService.rateCake(cake.id, newRating);
    obs.subscribe(() => {
      this.getCakes();
      this.showCake(cake.id);
    });
  }

  deleteCake(id) {
    const obs = this._httpService.deleteCake(id);
    obs.subscribe(() => {
      this.getCakes();
    });
  }

}
