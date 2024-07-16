
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

router.put( "/:id", async ( req, res ) => {
  try {
    const postData = await Post.findByPk( req.params.id );
    const updatedPostData = await postData.update( {
      title : req.body.title,
      content : req.body.content
    } );

    const updatedPost = postData.get( { plain : true } );
    res.status( 200 ).json( updatedPost );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

router.delete( "/:id", async ( req, res ) => {
  try {
    const postDeleted = await Post.destroy( { 
      where : {
        id : req.params.id
      }
    } );

    res.status( 200 ).json( { postDeleted, message : "Post deleted successfully" } );

  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;