//define functions here

function getIt(){
  // const getIt() doesnt attach declaration to window
  //
  $('p').on('click', () => alert("hi") )
  // arrow function is the event handler,
  // click is the event that we BIND to the p tag
}



$(document).ready(function(){

// call functions here
getIt()
frameIt()

submitIt()
});

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $('input#typing').on('keydown', function(e){
  //  if (e.key === 'g'){ // test: {key: 'g' } but instead we have { which: 71 }
    if (e.which === 71){
      alert ("you pressed g")
    }
  })
}

function frameIt(){
  $('img').on('load', () => {
    $('img').addClass('tasty')
  })
}
// going in to the dom is expensive (slow)
// doing it twice is also slow
// we can assign a variable, $ tells us its JQuery Object
// const $img = $('img')
