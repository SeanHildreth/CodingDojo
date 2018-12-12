import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const obs = this._httpService.getWeather('chicago');
    obs.subscribe(data => {
      this.city = data;
      console.log('In Chicago');
      console.log(this.city);
    });
  }

}
