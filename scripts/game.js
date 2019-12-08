//Initializing variables used for the game
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 20;
var count = 0;
var score = 0;
var fireballs =[];
var gameStats ={
  difficulty: 0,
  score: 0,
}
var character = {
  x: 140,
  y: 380
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Game Loop
function loop() {
  requestAnimationFrame(loop);
  //Slows down the game to 15fps
  if (++count < 4) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  //Prevents character from going off screen
  if (character.x < 0) {
    character.x = 0;
  }
  else if (character.x >= 400) {
    character.x = 380;
  }
  //Draws the player character
  context.fillStyle = 'green';
  context.fillRect(character.x, character.y, grid-1, grid-1);

  //Moves and draws the fireballs
  for (i = 0; i < fireballs.length; i++){
    fireballs[i].y += fireballs[i].dy;
    context.fillStyle = 'red';
    context.fillRect(fireballs[i].x, fireballs[i].y, grid-1, grid-1);

    if (fireballs[i].y > 400){
      fireballs[i].x = getRandomInt(0,25) * grid;
      fireballs[i].y = 0;
      gameStats.score++;
    }

    //If the player collides with a fireball, the game ends. Their score and name is posed on the scoreboard and the score is reset
    if (character.x === fireballs[i].x && character.y === fireballs[i].y) {
      fireballs = [];
      $( ".playerName" ).after( "<p>" + gameInfo.playerName.value + "</p>" );
      $( ".playerScore" ).after( "<p>" + gameStats.score+"</p>" );
      gameStats.score = 0;
    }
  }
}

//Controls the player character
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    character.x -= 20;
  }
  else if (e.which === 39) {
    character.x += 20;
  }
});

//starts the game
requestAnimationFrame(loop);