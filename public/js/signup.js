
const signupFormHandler = async event => {
  event.preventDefault();

  const username = document.querySelector( "#username" ).value.trim();
  const password = document.querySelector( "#password" ).value.trim();

  if( username && password ) {
    const response = await fetch( "/api/techUsers", {
      method : "POST",
      body : JSON.stringify( { username, password } ),
      headers : { "Content-Type" : "application/json" }
    } );

    if( response.ok ) {
      document.location.replace( "/dashboard" );
    } else {
      alert( "Invalid password... Must be at least 8 characters long" );
    }
  }
}

document.querySelector( "#signup-form" )
.addEventListener( "submit", signupFormHandler );