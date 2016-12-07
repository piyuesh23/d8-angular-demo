import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntitylistComponent } from './entitylist/entitylist.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pages', component: EntitylistComponent },
    { path: 'activities', component: EntitylistComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
