var players = [0, 0];
var playerPosition = 0;
var diceValue;
var ladder = [17, 29, 34, 60, 82];
var snake = [20, 32, 55, 63, 92];
var checkPosition;
var boardSize = 100;
var playAgain = false;
for (var i = players[playerPosition]; players[playerPosition] < boardSize; i++) {
    console.log(playerPosition);
    diceValue = Math.floor((Math.random() * 6) + 1);
    if (players[playerPosition] >= 94) {
        checkPosition = boardSize - players[playerPosition];
        console.log(diceValue, players[playerPosition], checkPosition);
        if (diceValue <= checkPosition) {
            players[playerPosition] = players[playerPosition] + diceValue;
        }
    }
    else {
        players[playerPosition] = players[playerPosition] + diceValue;
    }
    for (var j = 0; j < ladder.length; j++) {
        if (players[playerPosition] == ladder[j]) {
            players[playerPosition] = players[playerPosition] + 7;
            playAgain = true;
        }
    }
    for (var k = 0; k < snake.length; k++) {
        if (players[playerPosition] == snake[k]) {
            players[playerPosition] = players[playerPosition] - 10;
        }
    }
    if (playAgain == false) {
        console.log('player 1', players[playerPosition], playerPosition);
        if (playerPosition == 0) {
            if (players[playerPosition] == 100) {
                break;
            }
            playerPosition = 1;
        }
        else {
            console.log('player 2', players[playerPosition], playerPosition);
            if (players[playerPosition] == 100) {
                break;
            }
            playerPosition = 0;
        }
    }
    playAgain = false;

    console.log(i);
}
console.log(players[0], players[1]);
if (players[0] == 100) {
    console.log("player 1 is win");
}
else {
    console.log("player 2 is win");
}