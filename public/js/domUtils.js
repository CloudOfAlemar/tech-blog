export function addCommentToDOM( newComment ) {
  const commentsWrapper = document.querySelector( `#commentsModal${ newComment.post_id } .comments-wrapper` );
  const commentCard = document.createElement( "DIV" );
  commentCard.classList.add( "card", "mb-3" );
  commentCard.innerHTML = `
    <div class="card-body">
      <p class="m-0">${ newComment.content }</p>
    </div>
    <div class="card-footer text-muted">
      <p class="m-0">
        - ${ newComment.comment_author.username }, ${ new Date( newComment.createdAt ).toLocaleDateString( "en-US" ) }
      </p>
    </div>`;
  commentsWrapper.appendChild( commentCard );
  return commentCard;
}