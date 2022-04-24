var player_1 = 0;
var diceValue;
var ladder = [17, 29, 34, 60, 82];
var snake = [20, 32, 55, 63, 92];
var checkPosition;
var boardSize = 100;
for (var i = player_1; player_1 < boardSize; i++) {
    diceValue = Math.floor((Math.random() * 6) + 1);
    if (player_1 >= 94) {
        checkPosition = boardSize - player_1;
        console.log(diceValue, player_1, checkPosition);
        if (diceValue <= checkPosition) {
            player_1 = player_1 + diceValue;
        }
    }
    else {
        player_1 = player_1 + diceValue;
    }
    for (var j = 0; j < ladder.length; j++) {
        if (player_1 == ladder[j]) {
            player_1 = player_1 + 7;
        }
    }
    for (var k = 0; k < snake.length; k++) {
        if (player_1 == snake[k]) {
            player_1 = player_1 - 10;
        }
    }
    console.log(diceValue, player_1);
    console.log(i);
}