import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatMessage } from '../../models/chat.message';
import { RecastService } from '../../services/recast.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  providers: [ RecastService ]
})
export class ChatbotComponent implements OnInit {

  public userMessage: ChatMessage;
  public DomUserMessage: string = null;
  public botMessage: ChatMessage;
  public DomBotMessage: string;
  public conversation: Array<ChatMessage> = []
  public activeUserIntent: string = null;
  public newMessage: boolean = false;
  public newUserMessage: boolean = false;

  // Envoyer des données dans le composant parent
  @Output() sendBotFeeling: EventEmitter<string> = new EventEmitter

  constructor( private myService: RecastService ) { 
    this.userMessage = { id:'user', content: '' };
    this.botMessage = { id:'bot', content: '' };
  };

  public displayNewBotMessage(sentence){
    this.newMessage = false;
    setTimeout(() => {
      this.DomBotMessage = sentence;
      setTimeout(() => this.newMessage = true, 10);
    }, 400);
  }

  public displayNewUserMessage(sentence){
    this.newUserMessage = false;
    setTimeout(() => {
      this.DomUserMessage = sentence;
      setTimeout(() => this.newUserMessage = true, 10);
    }, 100);
  }

  public submitForm(){

    let tempMessage = { id:'user', content: this.userMessage.content, intent: '' }
    this.conversation.push(tempMessage)

    this.displayNewUserMessage(this.userMessage.content)

    tempMessage = null


    this.myService.getIndent(this.userMessage.content).then(
      data => {
        let subject = data.intentSubject;

        if(this.activeUserIntent === 'get-news-complete'){
          switch(data.intent){
            case `yes`:
              this.myService.getGoogleNews(subject).then(
                data => {
                  let tempNews = `Voila ce que j'ai trouve avec GoogleNews : <br><ul>`;
                  for(let news of data){
                    tempNews += `<li><span>${news.title}</span> <a href="${news.link}" target="_blank">En savoir +</a></li>`
                  }
                  tempNews += `</ul>`
                  tempMessage = { id:'bot', content: tempNews, intent: data.intent }
                  this.conversation.push(tempMessage)
                  
                  this.displayNewBotMessage(tempMessage.content);
                  
                  tempMessage = null
                  this.userMessage.content = ''
                  this.activeUserIntent = null
                }
                
              )
              break;

            default:
              this.displayNewBotMessage(`Je n'ai pas bien compris alors, vous pouvez répéter votre demande ?`);
              this.userMessage.content = ''
              this.activeUserIntent = null
              break;
          }

        } 
        
        else if(this.activeUserIntent === 'get-weather-complete'){
          switch(data.intent){
            case `yes`:
              this.myService.getWeather(subject).then(
                data => {
                  let tempNews = `
                    <p>Voila ce que j'ai trouve avec OpenWeatherMap :</p>
                    <p class="cityName">${data[0].location.name}</p>
                    <div class="weatherCard">
                      <div class="dayCycle">
                        <span>
                          <img src="${data[0].current.imageUrl}">
                        </span>
                      </div>
                      <div class="dayInfos">
                        <ul>
                          <li>
                            <span>${data[0].current.skytext}</span>
                            ${data[0].current.temperature}C° <em>Ressentie ${data[0].current.feelslike}C°</em>
                          </li>
                          <li>
                            <span>Vitesse du vent</span>
                            ${data[0].current.windspeed}
                          </li>
                          <li>
                            <span>Himidité</span>
                            ${data[0].current.humidity}%
                          </li>
                        </ul>
                      </div>
                    </div>
                  `;

                  // Afficher la météo sur une 5 jours
                  let fiveDays = data[0].forecast;

                  tempNews += `<p class="fiveDaysTitle">Evolution sur 5 jours</p>`;
                  tempNews += `<div class="fiveDays">`;
                  for(let item of fiveDays){
                    tempNews += `
                      <ul class=singleDay">
                        <li>${item.low}°<span>Min.</span></li>
                        <li>${item.high}°<span>Max.</span></li>
                        <li>${item.shortday} <span>${item.skytextday}</span></li>
                      </ul>
                    `;
                  }
                  tempNews += `</div>`;
                  
                  tempMessage = { id:'bot', content: tempNews, intent: data.intent }
                  this.conversation.push(tempMessage)

                  this.displayNewBotMessage(tempMessage.content);

                  tempMessage = null
                  this.userMessage.content = ''
                  this.activeUserIntent = null
                }
                
              )
              break;

            default:
              this.displayNewBotMessage(`Je n'ai pas bien compris alors, vous pouvez répéter votre demande ?`);
              this.userMessage.content = ''
              this.activeUserIntent = null
              break;
          }

        } else if(this.activeUserIntent === 'get-movie-complete'){
          switch(data.intent){
            case `yes`:
              let subject = data.intentSubject;
              this.myService.getMovieList(subject).then(
                data => {
                  const movieArray = data.feed.movie

                  console.log(movieArray)
                  
                  let tempNews = `J'ai trouvé ${movieArray.length} film(s) : <br><ul>`;
                  
                  // Boucle sur la liste de film
                  for( let item of movieArray){
                    tempNews += `<li class="movieItemList">`;
                    if(item.poster){ tempNews += `<img src="${item.poster.href}">` };
                    tempNews += `<span class="movieTitle"><b>"${item.originalTitle}"</b>`;
                    if(item.castingShort){ 
                      if(item.castingShort.directors){ tempNews += `Réalisé par ${item.castingShort.directors} en ${item.productionYear} `};
                      if(item.castingShort.actors){ tempNews += `avec ${item.castingShort.actors}.`};
                    };
                    tempNews += `</span> `;
                    if(item.link){ tempNews += `<a href="${item.link[0].href}" target="_blank">En savoir +</a>` };

                  }
                  tempNews += `</ul>`;
                  tempMessage = { id:'bot', content: tempNews, intent: data.intent }
                  this.conversation.push(tempMessage)

                  this.displayNewBotMessage(tempMessage.content);
                  // this.DomBotMessage = tempMessage.content;

                  tempMessage = null
                  this.userMessage.content = ''
                  this.activeUserIntent = null
                }
              )
              break;

            default:
              this.displayNewBotMessage(`Je n'ai pas bien compris alors, vous pouvez répéter votre demande ?`);
              this.userMessage.content = ''
              this.activeUserIntent = null
              break;
          }

        }  else if(this.activeUserIntent === 'want-drink-complete'){
          switch(data.intent){
            case `yes`:
              this.displayNewBotMessage(`Très bien je vous prépare votre boisson tout de suite.`);
              this.userMessage.content = ''
              this.activeUserIntent = null
              break;

            default:
              this.displayNewBotMessage(`Je n'ai pas bien compris alors, vous pouvez répéter votre demande ?`);
              this.userMessage.content = ''
              this.activeUserIntent = null
              break;
          }
        } else{
          tempMessage = { id:'bot', content: data.content, intent: data.intent }
          this.sendBotFeeling.emit(data.feeling)

          this.activeUserIntent = data.intent
          this.conversation.push(tempMessage)

          this.displayNewBotMessage(tempMessage.content);

          tempMessage = null
          this.userMessage.content = ''
        }
      },
      
      error => console.log(error)
    )
  }

 

  ngOnInit() { }

}