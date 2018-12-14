import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
      { path: '', component: ProductsListComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
