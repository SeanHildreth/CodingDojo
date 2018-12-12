import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const obs = this._httpService.getWeather('dallas');
    obs.subscribe(data => {
      this.city = data;
      console.log('In Dallas');
      console.log(this.city);
    });
  }
}
