//Player can win points when they reach the water declare required variables below
let playerPoints = 0;
const pointCounter = document.querySelector(".points");

// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;
        // Move bugs back to start give them a random speed to avoid predictable patterns of movement.
       if (this.x >= 530) {
           this.x = -250;
           this.speed = 100 + Math.floor(Math.random() * 300);
       }
       //Detect collisions with the player
       //The player png has a transparent boarder 63px above his head, 32 below
       //each side there is 17px. this muse be taken into account for a collision.
       if (player.x < this.x + 70 && player.x + 17 > this.x &&
          player.y < this.y + 30 && 30 + player.y > this.y) {
            //collision has been detected and the player is moved back to the start point with no points
            player.x = 200;
            player.y = 380;
            playerPoints = 0;
            pointCounter.innerHTML = `${playerPoints} points.`;
          };
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};

// Declare player class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
  update (dt) {
    //check the player is on the board
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // if the top is reached a point is won and the player move back to start
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
        winPoints()
    }
  };
  handleInput(direction){
    //when keys are pressed the player will move to the next block. update x and y to show this move
    switch (direction) {

        case 'left':
          this.update(this.x -= 101);
          break;
        case 'up':
          this.update(this.y -= 83);
          break;
        case 'right':
          this.update(this.x += 101);
          break;
        case 'down':
          this.update(this.y += 83);
          break;
    }
  };
};
// Now instantiate your objects.
// Enemy objects in an array called allEnemies
let allEnemies = [];

const enemy = new Enemy(20, 60, 170);
const enemy2 = new Enemy(20, 135, 100);
const enemy3 = new Enemy(20, 220, 70);
const enemy4 = new Enemy(20, 135, 200);
const enemy5 = new Enemy(20, 220, 300);

allEnemies.push(enemy, enemy2, enemy3, enemy4, enemy5);

// Place the player object in a variable called player
const player = new Player(200, 375);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//player points

function  winPoints(){
  playerPoints ++;
  if(playerPoints === 1) {
    pointCounter.innerHTML = `${playerPoints} point.`
  } else {
    pointCounter.innerHTML = `${playerPoints} points.`
  }
};
