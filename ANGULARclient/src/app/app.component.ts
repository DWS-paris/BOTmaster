/*
Import des interfaces
*/
  import { Component } from '@angular/core';
//

/*
Configuration du composant
*/
  @Component({
    selector: 'app-root',
    template: `
      <main>
        <router-outlet></router-outlet>
      </main>
    `
  })
//

/*
Définition de la CLASS du composant
*/
  export class AppComponent {};
//