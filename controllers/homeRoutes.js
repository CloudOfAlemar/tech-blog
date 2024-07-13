
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../models" );

router.get( "/", async ( req, res ) => {
  try {
    const postsData = await Post.findAll( {
      include : [
        { model : Comment, include : { model : TechUser, as : "comment_author" } },
        { model : TechUser, as : "author" }
      ]
    } );
    const posts = postsData.map( post => post.get( { plain : true } ) );
    console.log( posts );
    console.log( posts[0].comments );
    res.render( "homepage", { posts } );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

router.get( "/login", ( req, res ) => {
    res.render( "login" );
} );

router.get( "/signup", ( req, res ) => {
  res.render( "signup" );
} );

module.exports = router;