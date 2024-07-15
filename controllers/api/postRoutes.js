
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../../models" );

router.post( "/", async ( req, res ) => {
  try {
    const newPostData = await Post.create( req.body );
    const newPost = newPostData.get( { plain : true } );
    res.status( 201 ).json( newPost );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;