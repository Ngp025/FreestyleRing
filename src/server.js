const express = require('express');
const path = require('path');
const http = require('http')

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});


// ---------------------------    Index Back en versus
//DOTENV
//if (process.env.NODE_ENV !== 'production') {
//  require('dotenv').config();
//}
// Local Functions
// Importar FrameWorks: Express, Morgan, Path
//const cors = require('cors'); // Cors se conecta con los edpoints de facebook o mejor dicho facilita la conexion
//const bodyParser = require('body-parser');

//const session = require('express-session');
//const cookieParser = require('cookie-parser');
//const morgan = require('morgan');
//

// Importamos las referencias a la Base de dato
require('../backend/database');

// Llamada a constante de express


// SETTINGS

//Para la terminal (Middlerware)
//app.use(morgan('dev'));

// Middlewares (funciones que se ejecutan antes de las rutas)
//app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.text());

/*
// Configurando https
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers.host === 'freestylering.herokuapp.com') {
      // make express use your custom domain name instead of heroku's default
      return res.redirect(301, 'https://www.your-domain-name.com');
    }
    if (req.headers['x-forwarded-proto'] !== 'https') {
      // the instructions to perform redirection will be located here
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      // if https is already being used, we simply move on to the next phase in the app's logic cycle
      return next();
    }
  } else {
    return next();
  }
});

// initialize session middleware
const sessionMiddleware = session({
  secret: 'random secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
});
*/

// Middlewares de Express que nos permiten enrutar y poder realizar peticiones HTTP (GET, POST, PUT, DELETE)
//app.use(express.json());
//app.use(cookieParser());
//app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: false })); //(false) asi no entiendo imagenes pesadas
//app.use(sessionMiddleware);

// STATICS FILES (HTML est??ticos, JS, CSS,...)


// Routes
// - - - - USSERS
app.use('/mclist', require('../backend/routes/mclist.routes'));

// Starting server













