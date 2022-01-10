
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;
if (gameStarted === false){
  $(document).keydown(function(){
    gameStarted = true;
    $("#" + "level-title").text("Level " + level);
    nextSequence();
  })
};


$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });

function nextSequence() {
  userClickedPattern = []
  level ++;
  $("#" + "level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3" );
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
         $("#"+currentColor).removeClass("pressed");
   }, 100);

  }

function checkAnswer(level){
  if (userClickedPattern[level] === gamePattern[level]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  } else {
    console.log("fail");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    })
  }
}

function startOver(){
  gamePattern = [];
  level = 0;
  gameStarted = False;
}
