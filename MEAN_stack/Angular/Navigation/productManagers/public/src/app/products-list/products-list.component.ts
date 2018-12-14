import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    const obs = this._httpService.getProducts();
    obs.subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  delete(id) {
    const obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log(id);
      const obs = this._httpService.getProducts();
      obs.subscribe(data => {
        console.log(data);
        this.products = data;
      });
    })
  }

}
