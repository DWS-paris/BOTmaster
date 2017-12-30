/*
Configuration des composants du service
*/
    let weather = require('weather-js');
    let allocine = require('allocine-api');
    let myGoogleNews = require('my-google-news');
    myGoogleNews.resultsPerPage = 5;
    myGoogleNews.lang = 'fr';
// 


/*
Définition du service
*/
    class knowledgeService {

        // Fonction de la requête GoogleNews
        static getGoogleNews(googleQuery, callBack){
            myGoogleNews(googleQuery, (err, res) => {
                if(!err){ callBack( res.links ) } 
                else{ callBack( err ) }
            });
        };

        // Fonction de la requête OpenWeatherMap
        static getWeather(cityQuery, callBack){
            weather.find({search: cityQuery, degreeType: 'C', lang: 'FR'}, (err, result) => {
                if(err) callBack( err );
                callBack( result );
            });
        };

        // Fonction de la requête AlloCiné
        static getMovieInfo(subject, callBack){
            allocine.api('search', {q: subject, filter: 'movie', count: 1000}, (error, results) => {
                if(error) { console.log('Error : '+ error); return; }
                callBack(results);
            });
        };
    }
// 

/*
Exporter le service
*/
    module.exports = knowledgeService
//