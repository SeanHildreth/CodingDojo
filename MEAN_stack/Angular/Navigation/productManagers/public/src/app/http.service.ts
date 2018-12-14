import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() { return this._http.get('/api/products'); }

  addProduct(data) {return this._http.post('/api/product/new', data); }

  deleteProduct(id) { return this._http.delete('/api/product/' + id); }

  getProduct(id) { return this._http.get('/api/product/' + id); }

  editProduct(id, data) { return this._http.put('/api/product/' + id, data); }

}
