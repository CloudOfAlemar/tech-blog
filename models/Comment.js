const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

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
    timestamps : false,
    modelName : "comment"
  }
);

module.exports = Comment;