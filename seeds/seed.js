
const sequelize = require( "../config/connection" );
const { TechUser, Post, Comment } = require( "../models" );

const techUserData = require( "./techUsers.json" );
const postData = require( "./posts.json" );
const commentData = require( "./comments.json" );

const syncDatabase = async () => {
  await sequelize.sync( { force : true } );

  const techUsers = await TechUser.bulkCreate( techUserData );
  const posts = await Post.bulkCreate( postData );
  const comments = await Comment.bulkCreate( commentData );
  process.exit( 0 );
}

syncDatabase();