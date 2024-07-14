
const commentHandler = async event => {
  event.preventDefault();
  
}

document.querySelector( "#comments-form" )
.addEventListener( "submit", commentHandler );