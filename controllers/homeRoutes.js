
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
    res.render( "homepage", { posts, loggedIn : req.session.loggedIn } );
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

router.get( "/dashboard", async ( req, res ) => {
  try {
    if( req.session.techUserId ) {
      const techUserPostData = await Post.findAll( {
        where : { tech_user_id : req.session.techUserId },
        include : [
          { model : Comment, include : { model : TechUser, as : "comment_author" } },
          { model : TechUser, as : "author" }
        ]
      } );
  
      const techUserPosts = techUserPostData.map( techUserPost => techUserPost.get( { plain : true } ) );
      console.log( techUserPosts );
      res.render( "dashboard", { techUserPosts, loggedIn : req.session.loggedIn } );
    } else {
      res.render( "dashboard", { loggedIn : req.session.loggedIn } );
    }
  } catch( error ) {
    res.status( 500 ).json( { error } );
  }
} );

module.exports = router;