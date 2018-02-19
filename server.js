/*
Import des composants du serveur
*/
    // Composants
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const cors = require('cors');
    const morgan = require('morgan');
    const router = express.Router();
    
    // Services
    const recastService = require('./services/recast.service');
    const knowledgeService = require('./services/knowledge.service');
//



/*
Configuration du serveur
*/
    // Définition du serveur et du port
    const app = express();
    app.set('port', (process.env.PORT || 3000));

    // Définition du dossier static
    app.set('views', __dirname + '/www');
    app.use(express.static(path.join(__dirname, 'www')));
    app.set('view engine', 'html');

    // Configuration des middlewares
    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
//


/*
Définition des routes
*/  
    // Routes client
    app.get(['/', '/dashboard'], (req, res) => {
        res.sendFile(__dirname +'/www/index.html');
    });

    // Route API : analyse des intents Recast
    app.get(['/api/intent/:subject'], (req, res) => {
        recastService.getIntent( req.params.subject, data => res.json(data) );
    });

    // Route API : recherche GoogleNews
    app.get('/api/googleNews/subject/:subject', (req, res, next) => {
        knowledgeService.getGoogleNews( req.params.subject, data => res.json(data) );
    });

    // Route API : recherche WeatherJS
    app.get('/api/weather/:subject', (req, res, next) => {
        knowledgeService.getWeather( req.params.subject, data => res.json(data) );
    });

    // Route API : recherche AlloCine
    app.get('/api/allocine/:subject', (req, res, next) => {
        knowledgeService.getMovieInfo( req.params.subject, data => res.json(data) );
    });
//


/*
Lancer le serveur
*/
    app.listen(app.get('port'), () => console.log(`Le serveur est lancé sur le port ${app.get('port')}`) );
//