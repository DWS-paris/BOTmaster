/*
Configuration de Recast.ai
*/
    const recastai = require('recastai').default;
    const client = new recastai('71fc061bf34303b676090f0e554a6ce0');
    const request = client.request;
    const say = require('say')
//


/*
Bot
*/
    let botBrain = {
        name: 'Alan',
        isGreeted: false,
        userIntent: null,
        botMessage: null,
        botFeeling: `neutral`,
        intentSubject: null,
        userPorductChoice: {
            type: null,
            option: null
        },

        // Définition des phrases du Bot
        botSentences: {
            iSayHello: [
                `Bonjour, que puis-je faire pour vous ?`,
                `Bonjour, je peux vous être utile ?`,
                `Bonjour, vous avez une question ?`,
                `Bonjour, en quoi puis-je vous être utile ?`
            ],
            iAmNoteGreeted: [
                `Je crois que quelqu'un me parle...`,
                `C'est étrange, est-ce qu'on me parle ?`,
                `Mais, il me semble que quelqu'un me parle...`,
                `Est-ce moi ou quelque essaye de me parler ?`
            ],
            iTalckAboutMe: [
                `Je suis un robot, une série de fonctions pensées pour vous rendre quelques services. Je m'appelle Alan et je peux : <ul><li># vous dire la météo</li><li># faire des recherches sur GoolgleNews</li><li># vous servir un café</li><li># rechercher des information sur un film</li></ul> `,
                `Je suis Alan et mon but est de vous rendre service en vous aidant dans vos tâches du quotidient comme : <ul><li># vous dire la météo</li><li># faire des recherches sur GoolgleNews</li><li># vous servir un café</li><li># rechercher des information sur un film</li></ul>`,
                `Mon nom est Alan, je suis pensé pour être un outil du quotidient et je vous propose mes services pour : <ul><li># vous dire la météo</li><li># faire des recherches sur GoolgleNews</li><li># vous servir un café</li><li># rechercher des information sur un film</li></ul>`,
                `M'essayer c'est m'adopter ! Je suis Alan et je peux vous être très utile au jour le jour pour : <ul><li># vous dire la météo</li><li># faire des recherches sur GoolgleNews</li><li># vous servir un café</li><li># rechercher des information sur un film</li></ul>`
            ],
            iAmPolite: [
                `Tous le plaisir est pour moi.`,
                `Je vous en prie.`,
                `Je suis à ton service.`
            ],
            iSayAjoke: [
                `Pourquoi il n'y a plus de mammouth ? Parce qu'il n’y a <b>plus de papmouth !</b>`,
                `Qu'est-ce qui fait nioc-noic ? Un canard qui essaye de <b>parler le verlan.</b>`,
                `Pourquoi Mickey Mousse ? Parce que <b>Mario brosse !</b>`,
                `Chuck Norris a déjà compté jusqu'à l'infini. <b>Deux fois !</b>`
            ],
            iAmShy: [
                `Merci beaucoup !`,
                `Je crois que je pourrais rougir...`,
                `Super Bot à ton service !`,
                `Le plus incroyable c'est toi !`,
                `Je ne suis rien comparé à toi`
            ],
            iAmSorry: [
                `Désolé... Je ferai mieux la prochaine fois.`,
                `Pardon, je suis désolé.`,
                `Pardon, je m'en excuse...`,
                `Je ferai en sorte de m'améliorer, pardon.`,
                `... pardon...`
            ],
            iLaught: [
                `Faire rire, c'est faire oublier. Quel bienfaiteur sur la terre, qu'un distributeur d'oubli !`,
                `Le rire, comme les essuie-glaces, permet d'avancer même s'il n'arrête pas la pluie.`,
                `Il faut rire de tout. C'est extrêmement important. C'est la seule humaine façon de friser la lucidité sans tomber dedans.`,
                `Il n'y a que les gens qui aiment rire qui sont sérieux. Les autres se prennent au sérieux.`,
                `Il faut rire avant d'être heureux, de peur de mourir sans avoir ri.`
            ],
            iFeel: [
                `Je fonctionne bien merci.`,
                `Mon programme s'exécute à merveille, je vais très bien !`,
                `Très bien, pour le moment mon code fonctionne correctement.`,
                `Tant que je suis connecté à Internet tout va bien.`,
                `Tout va bien, sinon c'est qu'il y à un bug !!`
            ],
            iAmChocked: [
                `Qui se venge d’un petit affront cherche à en recevoir de grands.`,
                `Pourquoi lave-t-on une injure alors qu'on essuie un affront ?`,
                `Ce n'est pas une injure ou un affront qui empêche le soleil de se coucher.`,
                `Ecrire, c'est affronter un visage inconnu.`,
                `Les hommes ont souvent moins de courage pour affronter les petits ennuis que les grandes catastrophes.`,
                `Le lâche a moins d'affronts à dévorer que l'ambitieux.`,
                `Parvenir à battre son adversaire sans l'avoir affronté est la meilleure conduite.`
            ],
            iTalckAboutFather: [
                `J'ai été créé par une équipe de personnes voulant de connaître les rouages de l'AI.`,
                `Au début, monsieur Turing, mais aujourd'hui je suis plutôt OpenSource.`,
                `Je suis né dans la tête de quelques personnes particulièrement curieuses.`,
                `Je suis le fuit d'un travail artisanal basé sur l'intelligence collective.`,
                `La liste est longue, API, frameworks ou modules, je suis créé par vous et pour vous.`,
                `La réponse à cette question ce trouve dans mon repo GitHub.`
            ],
            iSayWhatIdo: [
                `A la base je suis prévu pour servir des café mais je peux éffectuer des recherche sur le Web.`,
                `Mon but est de rendre service, faire un café ou discuter autours de différents sujets.`,
                `Je peux faire un café et répondre aux questions dont je connais les réponses.`,
                `Je suis spécialisé dans le café mais j'aime bien répondre aux question qu'on me pose.`,
                `C'est pour servir du café que je suis conçu mais j'aime bien discuter avec des humains.`
            ],
            iDontUnderstand: [
                `Je ne comprend pas votre phrase, pouvez-vous la reformuler ?`,
                `Pardon mais la phrase n'est pas assez claire pour moi, pouvez-vous la préciser ?`,
                `C'est assez difficile à comprendre pour moi, pouvez-vous formuler votre phrase différemment ?`,
                `Je suis désolé mais je ne comprend pas votre phrase...`,
                `J'aimerai vous aider mais je n'ai pas compri votre phrase...`
            ],
            iSayOkForCoffee: [
                `Oui je peux vous faire votre boisson, vous voulez un `,
                `Je vais vous préparer ça, vous voulez un `,
                `Laissez moi vous faire cette boisson, vous vouslez un `,
                `Avec grand  plaisir, vous voulez un `
            ],
            iSayNotOkForCoffee: [
                `Oui je peux vous faire votre boisson mais vous devez me précisez laquelle.`,
                `Si vous voulez que je vous prépare une boisson vous devez me préciser laquelle.`,
                `J'ai besoin de plus d'informations pour pouvoir vous prépare une boisson.`,
                `Vous devez me donner plus de précisions sur la boisson que vous voulez que je vous prépare.`
            ],
            iSayOkGoogleNews: [
                `Je peux trouver toute l'information que vous voulez, vous en cherchez sur `,
                `Je vais faire une recherche pour vous, vous voulez des information sur `,
                `Laissez moi chercher sur le Web, vous avez besoin d'informations sur `,
                `Vous voulez que je recherche sur Google des informations sur `
            ],
            iSayNotOkGoogleNews: [
                `Je peux rechercher des informations pour vous sur Google mais j'ai besoin de plus de précisions.`,
                `Pour faire une recheche d'informations sur Google j'ai besoin de plus de précisions.`,
                `Je n'ai pas compris le sujet de votre recherche, merci de la reformuler.`,
                `Il me faut plus de précisions pour que je puisse recherhce des informations sur Google.`
            ],
            iSayOkWeather: [
                `La météo ? Pas de problème, vous voulez celle de `,
                `Je peux vous dire la météo, vous voulez celle de `,
                `Je peux donner la météo, vous voulez celle de `,
                `Pas de problème, vous voulez la météo de `
            ],
            iSayNotOkWeather: [
                `Si vous voulez la météo vous devez me dire pour quelle ville.`,
                `Je peux vous dire la météo mais j'ai besoin de savoir pour quelle ville.`,
                `Je peux donner la météo, mais il faut préciser la ville.`,
                `Pas de problème, précisez la ville et je vous donne la météo.`
            ],
            iSayOkMovie: [
                `J'aime bien le cinéma, vous voulez que je recherche des informations sur `,
                `Très beau sujet le cinéma, vous recherchez des information sur `,
                `Je m'y connais en cinéma, vous voulez que je trouve des informations sur `,
                `Parlons de cinéma, vous voulez des informations sur `
            ],
            iSayNotOkMovie: [
                `Je peux faire des recheches sur AlloCiné mais j'ai besoin du titre d'un film.`,
                `Pour faire des rechechers sur AlloCiné j'ai besoin que vous me donniez le titre d'un film.`,
                `Je m'y connais en titre de film, vous devez m'en donner un pour que je recherche sur AlloCIné.`,
                `On peut parler de cinéma, mais donnez moi le titre d'un film pour commencer.`
            ],
            iSayIsntIt: [
                `, c'est bien ça ?`,
                `, n'est-ce pas ?`,
                `, j'ai bien compris ?`,
                `, c'est juste ?`,
                `, c'est correct ?`
            ]
        },

        // Méthode pour renvoyer la bonne réponse
        botResponse: () => {
            // Vérifier si le robot à été salué
            if(botBrain.isGreeted){

                // Analyse de l'intent Recast.ai et définition de la réponse
                switch(botBrain.userIntent){
                    case 'reset':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'no':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'yes':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'goodbye':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'greetings':
                    botBrain.botSpeaking(botBrain.botSentences.iSayHello);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'are-you-bot':
                    botBrain.botSpeaking( botBrain.botSentences.iTalckAboutMe);
                    botBrain.botFeeling = 'thinking';
                    break;

                    case 'didnt-understand':
                    botBrain.botSpeaking( botBrain.botSentences.iTalckAboutMe);
                    botBrain.botFeeling = 'thinking';
                    break;

                    case 'laught':
                    botBrain.botSpeaking( botBrain.botSentences.iLaught);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'compliment':
                    botBrain.botSpeaking( botBrain.botSentences.iAmShy);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'isnt-happy':
                    botBrain.botSpeaking( botBrain.botSentences.iAmSorry);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'is-happy':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'get-news':
                    botBrain.botSearchNews();
                    botBrain.botFeeling = 'asking';
                    break;

                    case 'get-movie':
                    botBrain.botGetMovie();
                    botBrain.botFeeling = 'asking';
                    break;

                    case 'want-drink':
                    botBrain.botDefineProduct();
                    botBrain.botFeeling = 'asking';
                    break;

                    case 'who-is-your-creator':
                    botBrain.botSpeaking( botBrain.botSentences.iTalckAboutFather);
                    botBrain.botFeeling = 'thinking';
                    break;

                    case 'get-time':
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'get-weather':
                    botBrain.botGetWeather();
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'ask-joke':
                    botBrain.botSpeaking( botBrain.botSentences.iSayAjoke);
                    botBrain.botFeeling = 'asking';
                    break;

                    case 'ask-feeling':
                    botBrain.botSpeaking( botBrain.botSentences.iFeel);
                    botBrain.botFeeling = 'thinking';
                    break;

                    case 'insult':
                    botBrain.botSpeaking( botBrain.botSentences.iAmChocked);
                    botBrain.botFeeling = 'insult';
                    break;
                    
                    case 'get-help':
                    botBrain.botSpeaking( botBrain.botSentences.iSayWhatIdo);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'say-thanks':
                    botBrain.botSpeaking( botBrain.botSentences.iAmPolite);
                    botBrain.botFeeling = 'neutral';
                    break;

                    case 'unknow':
                    botBrain.botSpeaking( botBrain.botSentences.iDontUnderstand);
                    botBrain.botFeeling = 'neutral';
                    break;

                    default:
                    botBrain.botSpeaking( botBrain.botSentences.iDontUnderstand);
                    botBrain.botFeeling = 'neutral';
                    break;
                }

            } else{
                botBrain.botSpeaking( botBrain.botSentences.iAmNoteGreeted);
                botBrain.botFeeling = 'neutral';
            }
        },

        // Méthode pour choisir aléatoirement une phrase pour la réponse
        botSpeaking: (sentences) => {
            let botChoice = Math.floor(Math.random() * (sentences.length));
            botBrain.botMessage = sentences[botChoice]
        },

        // Méthode pour définir le choix d'une boisson
        botDefineProduct : () => {
            if( botBrain.userPorductChoice.option != null && botBrain.userPorductChoice.type != null ){
                let start = Math.floor(Math.random() * (botBrain.botSentences.iSayOkForCoffee.length));
                let end = Math.floor(Math.random() * (botBrain.botSentences.iSayIsntIt.length));
                
                botBrain.botMessage = `${botBrain.botSentences.iSayOkForCoffee[start]} <em>"${botBrain.userPorductChoice.type} ${botBrain.userPorductChoice.option}"</em> ${botBrain.botSentences.iSayIsntIt[end]}`;

                botBrain.userIntent = `want-drink-complete`

            } else{
                botBrain.botSpeaking( botBrain.botSentences.iSayNotOkForCoffee);
            }
        },

        // Méthode pour éffectuer une requête GoogleNews
        botSearchNews: () => {
            if( botBrain.intentSubject != null ){
                let start = Math.floor(Math.random() * (botBrain.botSentences.iSayOkGoogleNews.length));
                let end = Math.floor(Math.random() * ((botBrain.botSentences.iSayIsntIt.length - 1) - 0)) + 0;
                
                botBrain.botMessage = `${botBrain.botSentences.iSayOkGoogleNews[start]} <em>"${botBrain.intentSubject}"</em>${botBrain.botSentences.iSayIsntIt[end]}`;

                botBrain.userIntent = `get-news-complete`;

            } else{
                botBrain.botSpeaking( botBrain.botSentences.iSayNotOkGoogleNews);
            }
        },

        // Méthode pour éffectuer une requête OpenWeatherMap
        botGetWeather: () => {
            if( botBrain.intentSubject != null ){
                let start = Math.floor(Math.random() * (botBrain.botSentences.iSayOkWeather.length));
                let end = Math.floor(Math.random() * (botBrain.botSentences.iSayIsntIt.length));
                
                botBrain.botMessage = `${botBrain.botSentences.iSayOkWeather[start]} <em>"${botBrain.intentSubject}"</em>${botBrain.botSentences.iSayIsntIt[end]}`;

                botBrain.userIntent = `get-weather-complete`

            } else{
                botBrain.botSpeaking( botBrain.botSentences.iSayNotOkWeather);
            }
        },

        // Méthode pour éffectuer une requête AlloCiné
        botGetMovie: () => {
            if( botBrain.intentSubject != null ){
                let start = Math.floor(Math.random() * (botBrain.botSentences.iSayOkMovie.length));
                let end = Math.floor(Math.random() * (botBrain.botSentences.iSayIsntIt.length));

                botBrain.botMessage = `${botBrain.botSentences.iSayOkMovie[start]} <em>"${botBrain.intentSubject}"</em>${botBrain.botSentences.iSayIsntIt[end]}`;

                botBrain.userIntent = `get-movie-complete`

            } else{
                botBrain.botSpeaking( botBrain.botSentences.iSayNotOkMovie);
             }
        }
    }
//




/*
Définition du service
*/
class RecastService {
    
    static getIntent(intent, callBack){
        
        // Définition de l'intention
        request.analyseText(intent).then(function(res) {
            botBrain.userIntent = 'unknow'
            // Vérification de la présence d'une intension
            if(res.intents.length != 0){
                // Définition de l'intention
                if(res.intents[0].slug == 'greetings') { botBrain.isGreeted = true };
                botBrain.userIntent = res.intents[0].slug;

                // Récupération du type de boisson
                let productEntity = res.all('product');
                if( productEntity != undefined ){
                    botBrain.userPorductChoice.type = productEntity[0].value
                }

                // Définition de l'option pour la boisson
                let sweetEntity = res.all('sweet');
                let lightEntity = res.all('light');

                if( sweetEntity != undefined ){
                    botBrain.userPorductChoice.option = sweetEntity[0].value

                } else if( lightEntity != undefined ){
                    botBrain.userPorductChoice.option = lightEntity[0].value

                } else{
                    botBrain.userPorductChoice.option = null
                }

                // Récupération du sujet à traiter pour les news
                let subjectPerson = res.all('person');
                if( subjectPerson != undefined ){
                    botBrain.intentSubject = subjectPerson[0].raw
                }

                let subjectAll = res.all('subject');
                if( subjectAll != undefined ){
                    botBrain.intentSubject = subjectAll[0].raw
                }

                let locationAll = res.all('location');
                if( locationAll != undefined ){
                    botBrain.intentSubject = locationAll[0].formatted;
                }

                // LOG
                console.log('Recast LOG', res.intents);
                console.log('-----');
            }

            // Définir la réponse du Bot
            botBrain.botResponse()

            // Envoyer la réponse
            callBack( { 
                feeling: botBrain.botFeeling, 
                content: botBrain.botMessage, 
                intent: botBrain.userIntent, 
                intentSubject: botBrain.intentSubject 
            });

            // say.speak(botBrain.botMessage, 'Amelie')
            
            // LOG
            let botLog = {
                isGreeted: botBrain.isGreeted,
                userIntent: botBrain.userIntent,
                botMessage: botBrain.botMessage,
                botFeeling: botBrain.botFeeling,
                intentSubject: botBrain.intentSubject,
                userPorductChoice: botBrain.userPorductChoice
            };
            console.log('Bot LOG', botLog);
            console.log('-----');

            // Vider les messages
            botBrain.botMessage = '';
          })
          
          .catch( (err) => {
            // Définir la réponse du Bot
            botBrain.userIntent = 'unknow';
            botBrain.botResponse();
            // Envoyer la réponse
            callBack( { content: botBrain.botMessage, intent: botBrain.userIntent } )
          })
    }
}
// 



/*
Exporter le service
*/
    module.exports = RecastService
//