import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';


@NgModule({

    declarations:[
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    FooterComponent
],
exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    FooterComponent
]

})

export class SharedModule{}
