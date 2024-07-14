
const commentHandler = async event => {
  event.preventDefault();
  console.log( "works" );
}

document.querySelector( "#comments-form" )
.addEventListener( "submit", commentHandler );