/*
Import des interfaces
*/
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpModule } from '@angular/http';
//


/*
Import des composants
*/
  import { Routing } from './routes';
  import { AppComponent } from './app.component';
//


/*
Configuration du module
*/
  @NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, HttpModule, Routing ],
    bootstrap: [AppComponent]
  })

  // Export de la CLASS du module
  export class AppModule { };
//
