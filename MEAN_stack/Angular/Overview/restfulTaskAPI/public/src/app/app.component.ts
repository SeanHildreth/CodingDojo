import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  gotTask: any;
  newTask = {
    title: '',
    description: ''
  };
  editTask: any;
  showEditForm = false;
  gotTaskDiv = false;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
  }

  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
    });
  }

  showTask(id: String): void {
    console.log(`Click event is working with num param: ${id}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    const observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      this.gotTask = data;
      this.gotTaskDiv = true;
    });
  }

  onSubmit() {
    const observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got data back from post', data);
      this.newTask = {
        title: '',
        description: ''
      };
    });
    this.getTasksFromService();
  }

  showEdit() {
    this.editTask = {
      id: '',
      title: '',
      description: ''
    };
    this.editTask['id'] = this.gotTask.task[0]._id;
    this.editTask['title'] = this.gotTask.task[0].title;
    this.editTask['description'] = this.gotTask.task[0].description;
    this.showEditForm = true;
  }

  updateTask() {
    const observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(() => {
      this.editTask = {};
      this.showTask(this.gotTask.task[0]._id);
      this.getTasksFromService();
      this.showEditForm = false;
    });
  }

  deleteTask(id) {
    const observable = this._httpService.deleteTask(id);
    observable.subscribe(() => {
      this.showEditForm = false;
      this.gotTaskDiv = false;
      this.getTasksFromService();
    });
  }
}
