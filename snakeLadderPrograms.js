var player_1 = 0;
var b = Math.floor((Math.random() * 6) + 1);
var ladder = [17, 29, 34, 60, 82];
var snake = [20, 32, 55, 63, 92];
var checkposition;
player_1 = player_1 + b;
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