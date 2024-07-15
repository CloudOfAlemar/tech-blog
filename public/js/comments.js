
import { addCommentToDOM } from "./domUtils.js";

const commentHandler = async event => {
  event.preventDefault();
  const commentContent = event.target.querySelector( ".comment-content" );
  const commentContentValue = commentContent.value.trim();
  const postId = event.target.closest( ".post" ).dataset.postId;
  const techUserId = event.target.closest( ".post" ).dataset.techUserId;

  const response = await fetch( "/api/comments", {
    method : "POST",
    body : JSON.stringify( {
      content : commentContentValue,
      post_id : postId,
      tech_user_id : techUserId
    } ),
    headers : { "Content-Type" : "application/json" }
  } );

  const newComment = await response.json();

  if( response.ok ) {
    console.log( newComment );
    addCommentToDOM( newComment );
    commentContent.value = "";
  } else {
    alert( "Failed to add comment" );
  }
}

document.querySelectorAll( ".comments-form" )
.forEach( el => el.addEventListener( "submit", commentHandler ) );