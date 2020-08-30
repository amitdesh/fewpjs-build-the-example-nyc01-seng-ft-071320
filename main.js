// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(e){
  
  mimicServerCall()
  .then(response => response.json())
  .then(heartFunctions())
  .catch(() =>{
    const errorMessage = document.querySelector('.hidden')
    errorMessage.classList.remove('hidden')
    setTimeout(errorMessage.classList.add('hidden'), 5000)
  })

})

function likeHeart(){

  document.addEventListener('click', function(e){

    if (e.target.matches('.like-glyph')){
      e.target.innerText = FULL_HEART
    }
  })
}

function unlikeHeart(){
  
  document.addEventListener('click', function(e){
    if (e.target.innerText == FULL_HEART){
    e.target.innerText = EMPTY_HEART
    }
  })
}

function heartFunctions(){
  likeHeart()
  // unlikeHeart()

}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
