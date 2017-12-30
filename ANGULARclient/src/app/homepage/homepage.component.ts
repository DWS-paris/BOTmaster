/*
Import des interfaces
*/
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
//

/*
Configuration du composant
*/
  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
  })
//

/*
Définition de la CLASS du composant
*/
  export class HomepageComponent {

    // Définition des variables
    public halSentence: string;

    // Injection du router dans le CLASS
    constructor(public router: Router) { 
      this.halSentence = ``;
    };

    // Méthode pour changer de route
    public proceedChangeVue(event: string){
      this.router.navigate([event]);
    };
  };
//