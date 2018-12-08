import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks() { return this._http.get('/tasks'); }

  showTask() { return this._http.get('/task/5c09c3effe54053c5843423c'); }
}
