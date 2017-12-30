/*
Import des interfaces
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
//


/*
Import des composants
*/
  import { HomepageComponent } from './homepage.component';
  import { Routing } from './homepage.route';
  import { HalModule } from '../partials/hal/hal.module';
//


/*
Configuration du module
*/
  @NgModule({
    declarations: [ HomepageComponent ],
    imports: [ Routing, CommonModule, HalModule ]
  })

  // Export de la CLASS du module
  export class HomepageModule { };
// 