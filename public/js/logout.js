
const logout = async () => {
  const response = await fetch( "/api/techUsers/logout", {
    method : "POST",
    headers : { "Content-Type" : "application/json" }
  } );

  if( response.ok ) {
    document.location.replace( "/login" );
  } else {
    alert( response.statusText );
  }
}

document.querySelector( "#logout-btn" )
.addEventListener( "click", logout );