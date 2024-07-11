const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

class TechUser extends Model{}

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
    timestamps : false,
    modelName : "tech_user"
  }
);

module.exports = TechUser;