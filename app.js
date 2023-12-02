// Walker class
class Walk {
  constructor() {
    this.x = width / 2 + random(-width / 10, width / 10);
    this.y = height / 2 + random(-height / 10, height / 10);

    this.color = color(random(255), random(255), random(255));
  }

  walker() {
    let stepx = floor(random(3)) - 1;
    let stepy = floor(random(3)) - 1;
    this.x += 5 * stepx;
    this.y += 5 * stepy;

    /* 浮動小数点数を使う */
    // let stepx = random(-1, 1);
    // let stepy = random(-1, 1);
    // this.x += stepx;
    // this.y += stepy;

  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, 5);
  }
}

let w = [];
const num = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (let i = 0; i < num; i++) {
    w[i] = new Walk();
  }
}

function draw() {
  for (let i = 0; i < num; i++) {
    w[i].walker();
    w[i].display();
  }
}
