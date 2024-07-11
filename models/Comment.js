
/*
  Require Modules
*/
const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

/*
  Create Comment Model
    1). Create id, content columns
    2). Reference the post_id and tech_user_id columns from their Models

  Configure the Model with settings:
    1). sequelize - reference the sequelize instance
    2). freezeTableName : true - disable pluralization
    3). underscored : true - use snake_case for columns
    4). set the model name
*/
class Comment extends Model{}

Comment.init(
  {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },
    content : {
      type : DataTypes.STRING,
      allowNull : false
    },
    post_id : {
      type : DataTypes.INTEGER,
      references : {
        model : "post",
        key : "id"
      }
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
    modelName : "comment"
  }
);

/*
  Export Comment Model
*/
module.exports = Comment;