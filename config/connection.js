
const Sequelize = require( "sequelize" );
const path = require( "path" );
require( "dotenv" ).config( { path : path.resolve( __dirname, "../.env" ) } );

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize;