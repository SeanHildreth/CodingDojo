import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getCakes() { return this._http.get('/cakes'); }

  showCake(id) { return this._http.get('/cake/' + id); }

  createCake(newCake) { return this._http.post('/cake/new', newCake); }

  updateCake(editedCake) { return this._http.put('/cake/' + editedCake.id, editedCake); }

  rateCake(id, rating) { return this._http.post('/cake/' + id, rating); }

  deleteCake(id) { return this._http.delete('/cake/' + id); }

}
