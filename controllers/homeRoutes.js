
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
    const posts = postsData.map( post => post.get( { plain : true } ) );
    console.log( posts );
    res.render( "homepage", { posts } );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;