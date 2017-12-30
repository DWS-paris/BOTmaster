import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hal',
  templateUrl: './hal.component.html',
  styles: []
})
export class HalComponent implements OnInit {

  constructor() { };

  public coverEyeOpen: boolean = false;
  public animEyeOpen: boolean = false;
  public hideAnim: boolean = false;
  public showSentence: boolean = false;

  // Utiliser le décorateur @Input pour récupérer des données depuis le composant parent
  @Input() halSentence: string;
  @Input() vuePath: string;

  // Configurer l'émetteur d'événement
  @Output() changeVue: EventEmitter<string> = new EventEmitter;
  @Output() nextStep: EventEmitter<boolean> = new EventEmitter;

  // Ecrire les fonctions pour émettre les événements
  public proceedChangeVue(){
    this.hideAnim = true;
    this.coverEyeOpen = false;
    this.showSentence = false;
    this.nextStep.emit(false);

    // Emettre l'événement
    setTimeout(() => { this.changeVue.emit(this.vuePath) }, 300);
  };

  public proceedNextStep(){
    // Emettre l'événement
    setTimeout(() => { this.nextStep.emit(true) }, 100);
  };

  // Ecrire une fonction pour l'animation d'introduction
  public introduction(){
    this.coverEyeOpen = true; 
    setTimeout(() => { this.animEyeOpen = true }, 100);
  };

  // Ecrire une fonction pour faire parler Hal
  public halSpeacking(sentence: string){
    this.halSentence = sentence;
    this.showSentence = true;
  }

  
  // Fonction au chargement du composant : introduction
  ngOnInit() {
    setTimeout(() => { this.introduction() }, 100);
    setTimeout(() => { 
      this.halSpeacking(this.halSentence);
      this.proceedNextStep();
    }, 300);
  }

}
