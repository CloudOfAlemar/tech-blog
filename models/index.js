const TechUser = require( "./TechUser" );
const Post = require( "./Post" );
const Comment = require( "./Comment" );

TechUser.hasMany( Post, {
  foreignKey : "tech_user_id",
  onDelete : "CASCADE"
} );

Post.belongsTo( Post, {
  foreignKey : "tech_user_id"
} );

TechUser.hasMany( Comment, {
  foreignKey : "tech_user_id",
  onDelete : "CASCADE"
} );

Comment.belongsTo( TechUser, {
  foreignKey : "tech_user_id"
} );

Post.hasMany( Comment, {
  foreignKey : "post_id",
  onDelete : "CASCADE"
} );

Comment.belongsTo( Post, {
  foreignKey : "post_id"
} );

module.exports = { TechUser, Post, Comment };