
const updatePostTriggerBtnHandler = event => {
  const post = event.target.closest( ".post" );
  const postTitle = post.querySelector( ".post-title" ).innerText;
  const postContent = post.querySelector( ".post-content" ).innerText;
  const updatePostTitle = document.querySelector( ".update-post-title" );
  const updatePostContent = document.querySelector( ".update-post-content" );
  updatePostTitle.setAttribute( "value", postTitle );
  updatePostContent.innerText = postContent;
}

const updatePostHandler = async event => {
  event.preventDefault();
  const postId = event.target.closest( ".post" ).dataset.postId;
  const parentForm = event.target.closest( "#update-post-form" );
  const updatePostTitle = parentForm.querySelector( "#update-post-title" ).value.trim();
  const updatePostContent = parentForm.querySelector( "#update-post-content" ).value.trim();
  
  const response = await fetch( `api/posts/${ postId }`, {
    method : "PUT",
    body : JSON.stringify( {
      title : updatePostTitle,
      content : updatePostContent
    } ),
    headers : { "Content-Type" : "application/json" }
  } );

  if( response.ok ) {
    document.location.reload();
  } else {
    alert( "Unable to update Post..." );
  }
}

document.querySelectorAll( ".update-post-trigger-btn" )
.forEach( btn => btn.addEventListener( "click", updatePostTriggerBtnHandler ) );

document.querySelectorAll( "#submit-update-post-btn" )
.forEach( btn => btn.addEventListener( "click", updatePostHandler ) );