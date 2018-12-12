import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const obs = this._httpService.getWeather('washington');
    obs.subscribe(data => {
      this.city = data;
      console.log('In Washington DC');
      console.log(this.city);
    });
  }
}
