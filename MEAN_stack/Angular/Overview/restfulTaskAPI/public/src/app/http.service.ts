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

  createTask(newTask) { return this._http.post('/task/new', newTask); }

  updateTask(editTask) { return this._http.put('/task/' + editTask.id, editTask); }

  deleteTask(id) { return this._http.delete('/task/' + id); }
}
