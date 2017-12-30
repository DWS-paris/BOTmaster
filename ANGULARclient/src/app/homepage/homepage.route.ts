/*
Import des interfaces
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
//

/*
Import des composants
*/
    import { HomepageComponent } from './homepage.component';
//

/*
Création des routes
*/
    const appRoutes: Routes = [
        { path: '', component: HomepageComponent }
    ];
//

/*
Export du router
*/ 
    export const Routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
//