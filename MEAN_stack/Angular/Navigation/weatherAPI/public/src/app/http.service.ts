import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city) { return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=0f0fce8edbcc65c461b520343307bf99'); }
}
