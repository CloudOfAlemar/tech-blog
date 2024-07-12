
const sequelize = require( "../config/connection" );
const { TechUser, Post } = require( "../models" );

const techUserData = require( "./techUsers.json" );
const postData = require( "./posts.json" );

const syncDatabase = async () => {
  await sequelize.sync( { force : true } );

  const techUsers = await TechUser.bulkCreate( techUserData );
  const posts = await Post.bulkCreate( postData );
  process.exit( 0 );
}

syncDatabase();