
const router = require( "express" ).Router();
const { TechUser, Post, Comment } = require( "../../models" );

router.post( "/", async ( req, res ) => {
  try {
    const newTechUserData = await TechUser.create( req.body );
    const newTechUser = newTechUserData.get( { plain : true } );
    // console.log( newTechUser );

    req.session.save( () => {
      req.session.techUserId = newTechUser.id;
      req.session.loggedIn = true;

      res.status( 201 ).json( newTechUser );
    } );
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

router.post( "/login", async ( req, res ) => {
  try {
    const techUserData = await TechUser.findOne( { where : { username : req.body.username } } );

    if( !techUserData ) {
      res.status( 404 ).json( { message : "Incorrect username or password." } );
      return;
    }

    const validatePassword = techUserData.checkPassword( req.body.password );

    if( !validatePassword ) {
      res.status( 404 ).json( { message : "Incorrect username or password." } );
      return;
    }

    const techUser = techUserData.get( { plain : true } );

    req.session.save( () => {
      req.session.techUserId = techUser.id;
      req.session.loggedIn = true;

      res.status( 200 ).json( techUser );
    } );
  } catch( error ) {
    res.status( 400 ).json( error );
  }
} );

router.post( "/logout", async ( req, res ) => {
  if( req.session.loggedIn ) {
    req.session.destroy( () => {
      res.status( 204 ).end();
    } );
  } else {
    res.status( 204 ).end();
  }
} );

module.exports = router;