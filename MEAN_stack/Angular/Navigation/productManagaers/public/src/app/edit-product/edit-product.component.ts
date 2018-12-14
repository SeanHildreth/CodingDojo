import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: any;
  private sub: any;
  product = {
    title: '',
    price: '',
    url: ''
  };
  errors: any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    const obs = this._httpService.getProduct(this.id);
    obs.subscribe(data => {
      console.log(data);
      this.product = data[0];
    });
  }

  editProduct() {
    const obs = this._httpService.editProduct(this.id, this.product);
    obs.subscribe(data => {
      if(!data['errors']) {
        console.log("Updated", data);
        this._router.navigate(['/products'])
      }
      this.errors = data['errors'];
      console.log("Now I'm here", this.errors);
    } )
  }

  delete(id) {
    const obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log(id);
      const obs = this._httpService.getProducts();
      obs.subscribe(data => this._router.navigate(['/products']) )
    })
  }

}
