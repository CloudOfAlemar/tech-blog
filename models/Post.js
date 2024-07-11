
/*
  Require Modules
*/
const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

/*
  Create Post Model
    1). Create id, title, content columns
    2). Reference the tech_user_id column from its Model

  Configure the Model with settings:
    1). sequelize - reference the sequelize instance
    2). freezeTableName : true - disable pluralization
    3). underscored : true - use snake_case for columns
    4). set the model name
*/
class Post extends Model{}

Post.init(
  {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },
    title : {
      type : DataTypes.STRING,
      allowNull : false
    },
    content : {
      type : DataTypes.STRING,
      allowNull : false
    },
    tech_user_id : {
      type : DataTypes.INTEGER,
      references : {
        model : "tech_user",
        key : "id"
      }
    }
  },
  {
    sequelize,
    freezeTableName : true,
    underscored : true,
    modelName : "post"
  }
);

/*
  Export Post Model
*/
module.exports = Post;