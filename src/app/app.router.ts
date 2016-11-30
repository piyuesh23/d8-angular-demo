import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntitylistComponent } from './entitylist/entitylist.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'pages', component: EntitylistComponent },
    { path: 'activities', component: EntitylistComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
