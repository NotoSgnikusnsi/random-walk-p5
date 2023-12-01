// Walker class
class Walk {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.x = width / 2;
    this.y = height / 2;
  }

  walker() {
    let stepx = floor(random(3)) - 1;
    let stepy = floor(random(3)) - 1;
    this.x += 2 * stepx;
    this.y += 2 * stepy;

    /* 浮動小数点数を使う */
    // let stepx = random(-1, 1);
    // let stepy = random(-1, 1);
    // this.x += stepx;
    // this.y += stepy;

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
