import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ContentComponent } from './component/shared/content/content.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { ShoppingCartComponent } from './component/cart/shopping-cart/shopping-cart.component';
import { LoginComponent } from './component/login/login/login.component';
import {RouterModule} from '@angular/router';
import { AuthInterceptor } from './component/security/auth.interceptor';
import { HistoryComponent } from './component/history/history.component';
import { DateTimeFormatPipe } from './model/date-time-format.pipe';
import { ErrorComponent } from './component/error/error.component';
import {Http403Interceptor} from './component/security/http403.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    LoginComponent,
    HistoryComponent,
    DateTimeFormatPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule, HttpClientModule, FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Http403Interceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
