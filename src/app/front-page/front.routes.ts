import  { Routes } from "@angular/router";
import { FrontLayoutComponent } from "./layouts/front-layout/front-layout.component";
import { HomePagesComponent } from "./pages/home-pages/home-pages.component";


const frontRoutes: Routes = [
    {
        path: "",
        component:  FrontLayoutComponent,
        children:[
            {
                path: '',
                component: HomePagesComponent,
            },
            {
                path: '**',
                loadComponent: () => 
                    import('./pages/not-found-page/not-found-page.component'),
            }, 
        ],
    },
];

export default frontRoutes; 