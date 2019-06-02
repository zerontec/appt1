import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import {PAGE_ROUTES} from './pages.route';




@NgModule({

    declarations: [
        HomeComponent,
        PagesComponent


    ],

    exports: [

        HomeComponent,
        PagesComponent
    ],

    imports:[SharedModule,
            PAGE_ROUTES]



})

export class PagesModule{}
