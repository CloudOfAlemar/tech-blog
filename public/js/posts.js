
const createPostHandler = async event => {
  event.preventDefault();
  const postTitleValue = document.querySelector( "#post-title" ).value.trim();
  const postContentValue = document.querySelector( "#post-content" ).value.trim();
  const techUserId = document.querySelector( "#dashboard-heading" ).dataset.techUserId;
  
  const response = await fetch( "/api/posts", {
    method : "POST",
    body : JSON.stringify( {
      title : postTitleValue,
      content : postContentValue,
      tech_user_id : techUserId
    } ),
    headers : { "Content-Type" : "application/json" }
  } );

  if( response.ok ) {
    document.location.replace( "/dashboard" );
  } else {
    alert( "Something went wrong... Post was NOT created..." );
  }
  

}

document.querySelector( "#submit-post-btn" )
.addEventListener( "click", createPostHandler );