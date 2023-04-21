import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
