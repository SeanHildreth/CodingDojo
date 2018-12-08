import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks() { return this._http.get('/tasks'); }

  showTask(id) { return this._http.get('/task/' + id); }

  // getFromServer(id) {
  //   // use the .post() method of HttpClient
  //   // num must be an object
  //   // provide the url of your post route - make sure this is set up in your server!
  //   return this._http.get('/task/' + id);
  // }
  //
  // postToServer(num) {
  //   // use the .post() method of HttpClient
  //   // num must be an object
  //   // provide the url of your post route - make sure this is set up in your server!
  //   return this._http.post('/tasks', num);
  // }
}
