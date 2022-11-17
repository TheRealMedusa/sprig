/*
@title: Snake
@author: Kelly
*/

const logo1 = "1";
const logo2 = "2";
const player = "p";
const wall = "w";
const gamebg = "g";
const food = "f";
const body = "b";

setLegend(
  [ player, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HH00HHHHHHHH00HH
HH00HHHHHHHH00HH
HH00HHHHHHHH00HH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
  [ body, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [ gamebg, bitmap`
1111111111111112
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
1000000000000002
2222222222222222`],
  [ food, bitmap`
................
........444.....
.......C4444....
.......CC.4.....
....333CC333....
...3333333333...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
...3333333333...
....33333333....
......3333......
................
................`]
);

const music = tune`
1764.7058823529412: a4-1764.7058823529412 + f4~1764.7058823529412 + a5/1764.7058823529412,
1764.7058823529412: g4~1764.7058823529412 + b4-1764.7058823529412 + g5/1764.7058823529412,
1764.7058823529412: a4-1764.7058823529412 + f4~1764.7058823529412,
1764.7058823529412: g4~1764.7058823529412 + b4-1764.7058823529412,
1764.7058823529412: a4-1764.7058823529412 + f4~1764.7058823529412,
1764.7058823529412: g4~1764.7058823529412 + b4-1764.7058823529412,
1764.7058823529412: a4-1764.7058823529412 + f4~1764.7058823529412,
1764.7058823529412: f4/1764.7058823529412 + d4^1764.7058823529412,
1764.7058823529412: g4/1764.7058823529412 + e4^1764.7058823529412,
1764.7058823529412: a4/1764.7058823529412 + f4^1764.7058823529412,
1764.7058823529412,
1764.7058823529412: g4/1764.7058823529412 + e4~1764.7058823529412 + c4-1764.7058823529412 + b4^1764.7058823529412,
1764.7058823529412: a4/1764.7058823529412 + f4~1764.7058823529412 + d4-1764.7058823529412 + c5^1764.7058823529412,
1764.7058823529412: b4/1764.7058823529412 + g4~1764.7058823529412 + e4-1764.7058823529412 + d5^1764.7058823529412,
1764.7058823529412,
1764.7058823529412: c5/1764.7058823529412 + e5-1764.7058823529412,
1764.7058823529412: b4/1764.7058823529412 + d5-1764.7058823529412,
1764.7058823529412: a4/1764.7058823529412 + c5-1764.7058823529412,
1764.7058823529412: g4/1764.7058823529412 + b4-1764.7058823529412,
1764.7058823529412: f4/1764.7058823529412 + a4-1764.7058823529412,
1764.7058823529412: e4^1764.7058823529412 + g4^1764.7058823529412,
1764.7058823529412: d4^1764.7058823529412 + f4^1764.7058823529412,
1764.7058823529412: c4^1764.7058823529412 + e4^1764.7058823529412,
1764.7058823529412: d4~1764.7058823529412 + f4/1764.7058823529412,
1764.7058823529412: e4~1764.7058823529412 + g4/1764.7058823529412 + c4/1764.7058823529412,
1764.7058823529412: f4~1764.7058823529412 + a4/1764.7058823529412 + d4/1764.7058823529412,
1764.7058823529412: g4~1764.7058823529412 + b4/1764.7058823529412 + e4/1764.7058823529412 + c4/1764.7058823529412,
1764.7058823529412: a4~1764.7058823529412 + c5/1764.7058823529412 + f4/1764.7058823529412 + d4/1764.7058823529412,
1764.7058823529412: b4~1764.7058823529412 + d5/1764.7058823529412 + g4/1764.7058823529412 + e4/1764.7058823529412 + c4/1764.7058823529412,
1764.7058823529412: c5~1764.7058823529412 + e5/1764.7058823529412 + a4/1764.7058823529412 + f4/1764.7058823529412 + d4/1764.7058823529412,
1764.7058823529412: d5~1764.7058823529412 + f5/1764.7058823529412 + c4/1764.7058823529412 + e4/1764.7058823529412 + g4/1764.7058823529412,
1764.7058823529412`;

let playback = playTune(music, Infinity)

let direction = "e";
let directionToSet = "e";
let score = 0;

setMap(map`
..........
..........
..........
..........
..........
..........
..........
..........`);
setBackground(gamebg);

setSolids([ player, wall, body]);

let snake = [
  [0, 0]
]

function placeFood() {
    let position = [Math.floor(Math.random() * 9)+1, Math.floor(Math.random() * 7)+1];
  
  addSprite(position[0], position[1], food);

  
}

function addScore() {
  clearText();
  addText("SCORE: " + score, {x: 1, y: 1});
}

function gameOver() {
  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 7; y++) {
      addSprite(x, y, gamebg);
    }
  }
  clearText();
  addText("GAME OVER!", {x:5, y:4, color:color`2`});
  addText("Final Score: " + score, {x: 1, y:6});
  addText("Try again? Press i.", {x: 1, y:13});
  clearInterval(interval);
  if(playback) playback.end();
}

addScore();

onInput("s", () => {
  if (direction != "n") {
  directionToSet = "s";
  }
});

onInput("d", () => {
  if (direction != "w") {
  directionToSet = "e";
  }
});
onInput("a", () => {
  if (direction != "e") {
  directionToSet = "w";
  }
});
onInput("w", () => {
  if (direction != "s") {
  directionToSet = "n";
  }
});

onInput("i", () => {
  clearText();
  getAll().forEach(tile => {
    clearTile(tile.x, tile.y);
  });
  score = 0;
  direction = "e";
  directionToSet = "e";
  snake = [
  [0, 0]
];
  placeFood();
  clearInterval(interval);
  interval = setInterval(move, 400);
  addScore();

  if(playback) playback.end();
  playback = playTune(music, Infinity);
});

placeFood();

function move() {

  direction = directionToSet;
  
  if (tilesWith(food) == 0) {
    placeFood();
  }
  
  switch(direction) {
    case "n":
      snake.push([snake[snake.length-1][0], snake[snake.length-1][1]-1])
      break;
    case "s":
      snake.push([snake[snake.length-1][0], snake[snake.length-1][1]+1])
      break;
    case "e":
      snake.push([snake[snake.length-1][0]+1, snake[snake.length-1][1]])
      break;
    case "w":
      snake.push([snake[snake.length-1][0]-1, snake[snake.length-1][1]])
      break;
  }
  
  if (tilesWith(player, food).length != 0 || tilesWith(body, food).length != 0) {
    console.log(tilesWith(player).length);
    placeFood();
    score += 1;
    clearTile(getFirst(food).x, getFirst(food).y);
    addScore();
    clearTile(snake[0][0], snake[0][1]);

    clearInterval(interval);
  interval = setInterval(move, 400 - (score*10));
  }
  else if (snake.length > 1) {
    
    let removed = snake.shift();
    clearTile(removed[0], removed[1]);
  }

  let i = 0;
  snake.forEach(el => {

    if (i+1 < snake.length) {
      clearTile(el[0], el[1]);
      addSprite(el[0], el[1], body);
  }
  else {
    if ((el[0] < 0 || el[0] > 9) || (el[1] < 0 || el[1] > 7)) {
      
      gameOver();
    } else {
    addSprite(el[0], el[1], player);
    }
  }
    if (tilesWith(player, body).length != 0) {
      gameOver();
    }
    i++;
  })
}

let interval = setInterval(move, 400);