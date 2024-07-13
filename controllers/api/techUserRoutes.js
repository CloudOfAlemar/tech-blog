
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../../models" );

router.post( "/", async ( req, res ) => {
  try {
    const newTechUserData = await TechUser.create( req.body );
    const newTechUser = newTechUserData.get( { plain : true } );
    console.log( newTechUser );
    res.status( 201 ).json( newTechUser );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;