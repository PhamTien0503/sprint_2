import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }
