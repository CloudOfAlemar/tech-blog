
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../models" );

router.get( "/", async ( req, res ) => {
  try {
    const postsData = await Post.findAll();
    res.status( 200 ).json( postsData );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;