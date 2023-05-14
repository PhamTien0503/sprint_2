import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './component/shared/content/content.component';
import {LoginComponent} from './component/login/login/login.component';
import {ProductDetailComponent} from './component/product/product-detail/product-detail.component';
import {ShoppingCartComponent} from './component/cart/shopping-cart/shopping-cart.component';
import {HistoryComponent} from './component/history/history.component';
import {ErrorComponent} from './component/error/error.component';
import {UserGuard} from './component/security/user.guard';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {
    canActivate: [UserGuard],
    path: 'product/detail/:id',
    component: ProductDetailComponent
  },
  {
    canActivate: [UserGuard],
    path: 'product/cart/:idUser',
    component: ShoppingCartComponent
  },
  {
    canActivate: [UserGuard],
    path: 'history/:idUser',
    component: HistoryComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
