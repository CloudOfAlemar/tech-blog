
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../../models" );

router.post( "/", async ( req, res ) => {
  try {
    const newCommentData = await Comment.create( req.body );
    const commentWithAuthorData = await Comment.findOne( {
      where : { id : newCommentData.id },
      include : { model : TechUser, as : "comment_author" }
    } );

    const commentWithAuthor = commentWithAuthorData.get( { plain : true } );

    res.status( 201 ).json( commentWithAuthor );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;