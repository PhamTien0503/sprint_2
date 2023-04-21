import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {
}