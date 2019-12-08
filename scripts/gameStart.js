//Creates a random number (Used for initalizing)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
randomSpeed = 0;

//Validates the player's info when clicking start, then starts the game, initalizing it based on the difficulty setting
$(document).ready(function(){
    $(".start").click(function(){
        valid = true;
        if(gameInfo.playerName.value === ""){
            document.getElementById('nameAlert').innerHTML="Please enter a name.";
            valid = false;
            }
        else{
            document.getElementById('nameAlert').innerHTML="";
            }

        if(gameInfo.difficulty.value == ""){
            document.getElementById('difficultyAlert').innerHTML="Please select a difficulty.";
            valid=false;
        }
        else{
            document.getElementById('difficultyAlert').innerHTML="";
        }
        //If the player's selections are valid, creates a difficulty number which is used to initalize the fireballs
        if(valid == true){  
            if (gameInfo.difficulty.value == "easy"){
                gameStats.difficulty = 5;
            }
            if (gameInfo.difficulty.value == "medium"){
                gameStats.difficulty = 10;
            }
            if (gameInfo.difficulty.value == "hard"){
                gameStats.difficulty = 20;
            }   
            //initalizes the fireball array, generating random speed values based on difficulty
            for (var i = 0; i < gameStats.difficulty; i++) {
                randomSpeed = getRandomInt(0,gameStats.difficulty)
                if (randomSpeed < 3){
                    randomSpeed = 4;
                }
                else if (randomSpeed < 5){
                    randomSpeed = 5;
                }
                else if (randomSpeed < 10){
                    randomSpeed = 10;
                }
                else if (randomSpeed < 15){
                    randomSpeed = 19;
                }
                else{
                    randomSpeed = 20;
                }
                fireballs.push({
                  x: getRandomInt(0,25) * 20,
                  y: 0,
                  dy: randomSpeed 
                });

              }
            }
    });
}); 