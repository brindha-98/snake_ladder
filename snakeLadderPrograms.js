var player_1 = 0;
var diceValue = Math.floor((Math.random() * 6) + 1);
var ladder = [17, 29, 34, 60, 82];
var snake = [20, 32, 55, 63, 92];
var checkPosition;
var boardSize = 100;
player_1 = player_1 + diceValue;
for (var i = 0; i < ladder.length; i++) {
    if (player_1 == ladder[i]) {
        player_1 = player_1 + 7;
    }
}
for (var i = 0; i < snake.length; i++) {
    if (player_1 == snake[i]) {
        player_1 = player_1 - 10;
    }
}
if (player_1 >= 94) {
    checkPosition = boardSize - player_1;
    if (checkPosition <= diceValue) {
        player_1 = player_1 + diceValue;
    }
}