import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) {

  }

  ngOnInit() {
  }

  createAuthor(data) {
    const obs = this._httpService.newAuthor(data);
    obs.subscribe(data => this._router.navigate(['']) )
  }

}
