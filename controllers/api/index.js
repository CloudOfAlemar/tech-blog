
const router = require( "express" ).Router();
const techUserRoutes = require( "./techUserRoutes" );

router.use( "/techUsers", techUserRoutes );

module.exports = router;