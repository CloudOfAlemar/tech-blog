
const router = require( "express" ).Router();
const techUserRoutes = require( "./techUserRoutes" );
const commentRoutes = require( "./commentRoutes" );
const postRoutes = require( "./postRoutes" );

router.use( "/techUsers", techUserRoutes );
router.use( "/comments", commentRoutes );
router.use( "/posts", postRoutes );

module.exports = router;