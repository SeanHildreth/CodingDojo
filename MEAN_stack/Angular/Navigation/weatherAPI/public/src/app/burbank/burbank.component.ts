import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const obs = this._httpService.getWeather('burbank');
    obs.subscribe(data => {
      this.city = data;
      console.log('In Burbank');
      console.log(this.city);
    });
  }

}
