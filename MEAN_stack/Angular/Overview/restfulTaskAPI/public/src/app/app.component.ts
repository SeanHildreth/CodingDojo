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
  task = '';

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
    observable.subscribe(data => this.task = data['task'][0].description);
  }

  // onButtonClickParam2(num: Number): void {
  //   console.log(`Click event is working with num param: ${num}`);
  //   // call the service's method to post the data, but make sure the data is bundled up in an object!
  //   const observable = this._httpService.postToServer({data: num});
  //   observable.subscribe(data => console.log('Got our data!', data));
  // }
}
