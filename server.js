/*
  Require Modules
*/
const path = require( "path" );

const express = require( "express" );
const sequelize = require( "./config/connection" );
const exphbs = require( "express-handlebars" );

const { TechUser, Post, Comment } = require( "./models" );
const routes = require( "./controllers" );

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create( {  } );

/*
  Configure Express.js to use handlebars as a templating engine
  for rendering views
*/
app.engine( "handlebars", hbs.engine );
app.set( "view engine", "handlebars" );

/*
  Middleware:
    1). express.json to parse the response body
    2). express.static to serve static files
    3). express.urlencoded to parse data from forms
    4). app.use( routes ) points to my controller/index.js file
        to connect to its routes
*/
app.use( express.json() );
app.use( express.static( path.join( __dirname, "public" ) ) );
app.use( express.urlencoded( { extended : true } ) );
app.use( routes );

/*
  Synchronize sequelize Models with database and Run Server on PORT
*/
sequelize.sync( { force : true } ).then( () => {
  app.listen( PORT, () => console.log( `Listening on Port ${ PORT }...` ) );
} );