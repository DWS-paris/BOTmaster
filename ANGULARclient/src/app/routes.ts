/*
Import des interfaces
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
//

/*
Création des routes
*/
    const appRoutes: Routes = [
        { path: '', loadChildren: './homepage/homepage.module#HomepageModule' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ];
//

/*
Export du router
*/ 
    export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//