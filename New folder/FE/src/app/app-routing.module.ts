import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './component/shared/content/content.component';
import {LoginComponent} from './component/login/login/login.component';
import {ProductDetailComponent} from './component/product/product-detail/product-detail.component';
import {ShoppingCartComponent} from './component/cart/shopping-cart/shopping-cart.component';
import {HistoryComponent} from './component/history/history.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product/cart/:idUser',
    component: ShoppingCartComponent
  },
  {
    path: 'history/:idUser',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
