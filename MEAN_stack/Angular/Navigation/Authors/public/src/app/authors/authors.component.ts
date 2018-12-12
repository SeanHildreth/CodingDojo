import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    const obs = this._httpService.getAuthors();
    obs.subscribe(data => {
      console.log(data);
      this.authors = data;
    });
  }

  delete(id) {
    const obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      console.log(id);
      const obs = this._httpService.getAuthors();
      obs.subscribe(data => {
        console.log(data);
        this.authors = data;
      });
    })
  }

}
