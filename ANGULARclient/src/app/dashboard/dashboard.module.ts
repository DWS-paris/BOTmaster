/*
Import des interfaces
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
//


/*
Import des composants
*/
  import { Routing } from './dashboard.route';
  import { DashboardComponent } from './dashboard.component';
  import { HalModule } from '../partials/hal/hal.module';
  import { ChatbotModule } from '../partials/chatbot/chatbot.module';
//


/*
Configuration du module
*/
  @NgModule({
    declarations: [ DashboardComponent ],
    imports: [ Routing, CommonModule, HalModule, ChatbotModule ]
  })

  // Export de la CLASS du module
  export class DashboardModule { };
//