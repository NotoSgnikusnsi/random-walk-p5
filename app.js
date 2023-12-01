// Waker class
class Walk {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.x = width / 2;
    this.y = height / 2;
  }

  walker() {
    let choice = floor(random(4));
    switch (choice) {
      case 0:
        this.x++;
        break;
      case 1:
        this.x--;
        break;
      case 2:
        this.y++;
        break;
      case 3:
        this.y--;
        break;

      default:
        break;
    }
  }

  display() {
    point(this.x, this.y);
  }
}

let w;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  w = new Walk();
}

function draw() {
  w.walker();
  w.display();
}
