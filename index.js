var level = 0;
var sequence = [];
var rightsequence = sequence.slice();
var colors = ["green", "red", "yellow", "blue"];


// Event listener for keydown
$(document).keydown(function() {
  if (level == 0) {
    pcturn();
  }

})

// Event Listener for Buttons
$(".btn").click(function() {
  var colorPressed = $(this).attr("id");
  pressed(colorPressed);
  //Player Turn
  setTimeout(function() {
  var rightColor = rightsequence.shift();
  if (colorPressed != rightColor && level != 0) {
    gameOver();
  }

  if (rightsequence.length == 0 && level != 0) {
    setTimeout(pcturn, 1000);
  }
}, 10);
});

function pcturn() {
  var buttonPressed = Math.floor(Math.random() * 4); // 0 - 3
  level++;
  $("#level-title").text("Level " + level);
  pressed(colors[buttonPressed]);
  sequence.push(colors[buttonPressed]);
  rightsequence = sequence.slice();
  console.log(sequence);
}

function pressed(color) {
  $("." + color).addClass("pressed");
  setTimeout(function() {
    $("." + color).removeClass("pressed");
  }, 100);
  new Audio("sounds/" + color + ".mp3").play();
}

function gameOver() {
  new Audio("sounds/wrong.mp3").play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  level = 0;
  $("#level-title").text("Game Over, Press Any Key to Restart"); sequence = []; rightsequence = sequence.slice();
  }
