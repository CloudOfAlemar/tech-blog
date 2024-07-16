
const deletePostHandler = async event => {
  const parentPost = event.target.closest( ".post" );
  const postId = parentPost.dataset.postId;
  
  const response = await fetch( `api/posts/${ postId }`, {
    method : "DELETE",
    headers : { "Content-Type" : "application/json" }
  } );

  if( response.ok ) {
    document.location.reload();
  } else {
    alert( "Couldn't Delete Post..." );
  }
}

document.querySelectorAll( "#delete-post-btn" )
.forEach( btn => btn.addEventListener( "click", deletePostHandler ) );