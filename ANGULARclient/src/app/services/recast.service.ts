/*
Import des interfaces
*/
  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import 'rxjs/add/operator/toPromise';
  import { ChatMessage } from '../models/chat.message';
//


/*
Définition du service
*/
  @Injectable()

  // Export de la CLASS du service
  export class RecastService {

    // Créer une variable pour l'adresse de l'API
    private apiUrl: string = '/api/';

    // Injecter une variable de type Http dans le service
    constructor( private http: Http ) { }

    
    // Requête API RecastIndent
    public getIndent(userMessage: string): Promise<ChatMessage> {
      return this.http.get(this.apiUrl + 'intent/' + userMessage).toPromise().then(this.getDataFromApi).catch(this.handleError)
    };

    // Requête API GoogleNews
    public getGoogleNews(userSubject: string): Promise<any> {
      return this.http.get(this.apiUrl + 'googleNews/subject/' + userSubject).toPromise().then(this.getDataFromApi).catch(this.handleError)
    };

    // Requête API OpenWeatherMap
    public getWeather(userSubject: string): Promise<any> {
      return this.http.get(this.apiUrl + 'weather/' + userSubject).toPromise().then(this.getDataFromApi).catch(this.handleError)
    };

    // Requête API AlloCiné : liste des films
    public getMovieList(userSubject: string): Promise<any> {
      return this.http.get(this.apiUrl + 'allocine/' + userSubject).toPromise().then(this.getDataFromApi).catch(this.handleError)
    };


    // Créer une fonction pour traiter le retour de l'API
    private getDataFromApi(res: Response){
      return res.json() || {};
    };

    // Créer une fonction pour traiter les erreurs de requête
    private handleError(err: any){
      return Promise.reject(err);
    };
  };
//