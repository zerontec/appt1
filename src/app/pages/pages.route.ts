import {Routes, RouterModule} from '@angular/router'; 
import { PagesComponent } from './pages.component';
import { HomeComponent} from './home/home.component';




const pagesRoutes: Routes = [


    {
        path: '',
        component: PagesComponent,

        children:[

            {path: 'home', component: HomeComponent},

        ]



    }
];

export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);