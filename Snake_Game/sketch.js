let snake;
//line 3 allows you to change the size of the sqaures you will be collecting as well as the snake you play as I decided to go with 10 as it allwed to you to have a longer game as more room avaliable while also still being able to see it well enough.
let rez = 10;
let food;
let w;
let h;
//The below code is used for creating the canvas side with the size I have chosen to be the biggest it can without over lapping.
function setup() {
  createCanvas(520, 480);
  w = floor(width / rez);
  h = floor(height / rez);
// line 12 framerate code allows you to change how fast and smooth you want the snake to be I went with 10 as I think its quick enough to keep you interested as well doesnt look to laggy.
  frameRate(10);
  snake = new Snake();
  foodLocation();
}
//This fuction is used to create the foods location in which you will be required to collect to stay alive as well as the use of line 13 is also used in this fuction.
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

//The below code from here to line 35 is there movement code in which ot calls upon an if statement which says if keyborad arrow key pressed move in the direction of the arrow at this rate. This fuction has been done with each of the arrow keys to allow the user to control the snakes direction.
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(0, 200, 0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

//This if statement will make GAME OVER display in the console window below 
  if (snake.endGame()) {
    print("GAME OVER");
    background(255, 0, 0);
    noLoop();
  }

//This code allowed me to change the colour of my fruit which you will collect I choose to make it yellow as although the original snake game was normally red it gives it a change I did try and see if I could have a code where it changed the colour of each piece of fruit randomly when collected but coloudn't get them to change.
  noStroke();
  fill(255, 215, 0);
  rect(food.x, food.y, 1, 1);
}