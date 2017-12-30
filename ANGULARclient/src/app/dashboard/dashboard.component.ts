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
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  })
//

/*
Définition de la CLASS du composant
*/
  export class DashboardComponent {

    // Définition des variables
    public botFeeling: string;
    public halSentence: string;
    public showNextStep: boolean;
    public userRegistration: boolean;
    public botShutUp: boolean;

    // Injection du router dans le CLASS
    constructor( public router: Router ) { 
      // Donner des valeurs aux variables
      this.botFeeling = `neutral`;
      this.showNextStep = false;
      this.userRegistration = false;
      this.botShutUp = false;
      this.halSentence = ``;
    };

    // Méthode de l'animation d'introduction
    public proceedNextStep(event: boolean){
      this.showNextStep = event;
    };

    // Méthode pour définir l'état du Bot
    public changeBotFeeling(event: string):void {
      this.botFeeling = event;
    };

    // Méthode pour changer de route
    public proceedChangeVue(event: string){
      this.router.navigate([event]);
    };
  };
//