// Enemies our player must avoid

class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      // The image/sprite for our enemies, this uses
      // a helper we've provided to easily load images
      this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;
        // Move bugs back to start
       if (this.x >= 530) {
           this.x = -100;
       }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // if the op is reached the game is won
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
  };
  handleInput(direction){

    switch (direction) {
        case 'left':
        debugger;
            this.x -= this.speed + 5;
            break;
        case 'up':
            this.y -= this.speed + 5;
            break;
        case 'right':
            this.x += this.speed + 5;
            break;
        case 'down':
            this.y += this.speed + 5;
            break;
    }
  };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
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
