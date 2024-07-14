
/*
  Require Modules
*/
const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

/*
  Create TechUser Model
    1). Create id, username, password columns
  
  Configure the Model with settings:
    1). sequelize - reference the sequelize instance
    2). freezeTableName : true - disable pluralization
    3). underscored : true - use snake_case for columns
    4). set the model name
*/
class TechUser extends Model{
  checkPassword( password ) {
    return password === this.password;
  }
}

TechUser.init(
  {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },
    username : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false
    }
  },
  {
    sequelize,
    freezeTableName : true,
    underscored : true,
    modelName : "tech_user"
  }
);

/*
  Export TechUser
*/
module.exports = TechUser;