
const path = require( "path" );

const express = require( "express" );

const sequelize = require( "./config/connection" );
const TechUser = require( "./models/TechUser" );

const app = express();
const PORT = process.env.PORT || 3001;

app.use( express.json() );
app.use( express.static( path.join( __dirname, "public" ) ) );
app.use( express.urlencoded( { extended : true } ) );

sequelize.sync( { force : true } ).then( () => {
  app.listen( PORT, () => console.log( `Listening on Port ${ PORT }...` ) );
} );