module.exports = {
  formatDate : date => {
    return date.toLocaleDateString( "en-US" );
  },
  checkRoute : ( routeA, routeB ) => {
    return routeA === routeB;
  }
}