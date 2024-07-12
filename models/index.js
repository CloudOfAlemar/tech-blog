
/*
  Require Modules
*/
const TechUser = require( "./TechUser" );
const Post = require( "./Post" );
const Comment = require( "./Comment" );

/*
  Build Relationships/Associations between Models
*/
TechUser.hasMany( Post, {
  foreignKey : "tech_user_id",
  onDelete : "CASCADE"
} );

Post.belongsTo( TechUser, {
  foreignKey : "tech_user_id",
  as : "author"
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

/*
  Export Models
*/
module.exports = { TechUser, Post, Comment };