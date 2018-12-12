import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() { return this._http.get('/authors'); }

  newAuthor(data) { return this._http.post('/author/new', data); }

  getAuthor(id) { return this._http.get('/author/' + id); }

  editAuthor(id, data) { return this._http.put('/author/' + id, data); }

  deleteAuthor(id) { return this._http.delete('/author/' + id); }

}
