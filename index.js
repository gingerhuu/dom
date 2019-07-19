var header = document.querySelector('h1')
console.log(header)

var button = $('button');

button.on('click', changeColors);

function changeColors() {
  button.toggleClass('pink')
}
var button = $('button');
var message = $('.message');

button.on ("click", getNameAndLogToConsole);

function getNameAndLogToConsole (){
  var name= $('.name-input') .val();
  console.log (name);
}

var button = $('button');
var message = $('.message');
 button.on ('click', displayText)

 function displayText() {
   var name = $(".name-input").val()
   console.log(getNameAndLogToConsole)
   message.text(getNameAndLogToConsole)
 }
