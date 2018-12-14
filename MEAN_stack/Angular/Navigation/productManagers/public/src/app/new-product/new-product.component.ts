import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  errors: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addProduct(stuff) {
    console.log("I'm here", stuff);
    const obs = this._httpService.addProduct(stuff);
    obs.subscribe(data => {
      if(!data['errors']) {
        this._router.navigate(['/products'])
      }
      this.errors = data['errors'];
      console.log("Now I'm here", data['errors']);
    } )
  }


}
