
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../models" );

router.get( "/", async ( req, res ) => {
  try {
    const postsData = await Post.findAll( {
      include : [
        { model : Comment },
        { model : TechUser, as : "author" }
      ]
    } );
    // res.status( 200 ).json( postsData );
    res.render( "homepage");
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;