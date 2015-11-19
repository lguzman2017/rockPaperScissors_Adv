var userPoint = 0;
var aiPoint = 0;

function getAISelection() {
    var Options= ["rock","paper","scissors"];
  var aiOption= Options[Math.floor(Math.random()* Options.length)];
  alert(aiOption);
  return aiOption;
} 

// This function picks the winner
function pickWinner(userValue, aiValue) {
   if (userValue == aiValue) {
     return "draw" ;
   }
  if (userValue== "rock"&& aiValue== "paper") {
    return "ai";
  }
   if (userValue== "rock"&& aiValue== "scissors") {
    return "user";
   }
   if (userValue== "paper"&& aiValue== "rock") {
    return "user";
   }
   if (userValue== "paper"&& aiValue== "scissors") {
    return "ai";
   }
   if (userValue== "scissors"&& aiValue== "paper") {
    return "user";
   }
  if (userValue== "scissors"&& aiValue== "rock") {
    return "ai";
  }
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again'); userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again'); aiPoint++;
    }
}

// This function runs on page load
$(document).ready(function(){
$("#rock").click(function(evt) {
  evaluate(evt);
  });
  $("#paper").click(function(evt) {
    evaluate(evt);
  });
  $("#scissors").click(function(evt) {
    evaluate(evt);
  });
  
});

  
  