/*
  Require Modules
*/
const path = require( "path" );

const express = require( "express" );

const sequelize = require( "./config/connection" );
const { TechUser, Post, Comment } = require( "./models" );

const app = express();
const PORT = process.env.PORT || 3001;

/*
  Middleware:
    1). express.json to parse the response body
    2). express.static to serve static files
    3). express.urlencoded to parse data from forms
*/
app.use( express.json() );
app.use( express.static( path.join( __dirname, "public" ) ) );
app.use( express.urlencoded( { extended : true } ) );

/*
  Synchronize sequelize Models with database and Run Server on PORT
*/
sequelize.sync( { force : true } ).then( () => {
  app.listen( PORT, () => console.log( `Listening on Port ${ PORT }...` ) );
} );