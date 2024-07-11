const { Model, DataTypes } = require( "sequelize" );
const sequelize = require( "../config/connection" );

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
    timestamps : false,
    modelName : "post"
  }
);

module.exports = Post;