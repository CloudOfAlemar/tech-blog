
const router = require( "express" ).Router();
const techUserRoutes = require( "./techUserRoutes" );
const commentRoutes = require( "./commentRoutes" );

router.use( "/techUsers", techUserRoutes );
router.use( "/comments", commentRoutes );

module.exports = router;