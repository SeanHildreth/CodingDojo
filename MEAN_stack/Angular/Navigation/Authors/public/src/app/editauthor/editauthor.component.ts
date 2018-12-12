import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  id: any;
  private sub: any;
  author: any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    const obs = this._httpService.getAuthor(this.id);
    obs.subscribe(data => this.author = data);
  }

  editAuthor(data) {
    const obs = this._httpService.editAuthor(this.id, data);
    obs.subscribe(data => this._router.navigate(['']) )
  }

}
