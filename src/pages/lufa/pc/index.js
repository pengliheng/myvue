import 'babel-polyfill';
import $ from '@pengliheng/jquery';
import './index.less';


const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

container.innerHTML = map
  .map((arr1, i) => arr1.map((arr2, j) => `<span class="list-${i}-${j}"></span>`))
  .map(arr1 => arr1.join('')).join('');


class Trash {
  constructor({ container }) {
    this.container = container;
    this.direct = 'ArrowRight';
    this.border = {
      width: map[0].length - 1,
      height: map.length - 1,
    };
    this.snake = [
      { x: 1, y: 5 },
      { x: 2, y: 5 },
    ];
    this.food = {
      x: Math.floor(Math.random() * this.border.width),
      y: Math.floor(Math.random() * this.border.height),
    };
  }

  draw() {
    // 清空画板
    const activeDom = document.querySelectorAll('.active');
    if (activeDom) {
      activeDom.forEach(dom => dom.classList.remove('active'));
    }
    this.snake.forEach(({ x, y }) => {
      document.querySelector(`.list-${y}-${x}`).classList.add('active');
    });
    document.querySelector(`.list-${this.food.y}-${this.food.x}`).classList.add('food');
  }

  generate() {
    document.querySelector(`.list-${this.food.y}-${this.food.x}`).classList.remove('food');
    this.food = {
      x: Math.floor(Math.random() * this.border.width),
      y: Math.floor(Math.random() * this.border.height),
    };
  }
  isEat() {
    const top = this.snake[this.snake.length - 1];
    if (
      top.x === this.food.x &&
      top.y === this.food.y
    ) {
      this.generate();
      return true;
    }
    return false;
  }

  move({ time }) {
    if (this.direct === 'ArrowRight') {
      if (this.snake[this.snake.length - 1].x === this.border.width) {
        this.snake.push({
          x: 0,
          y: this.snake[this.snake.length - 1].y,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x + 1,
          y: this.snake[this.snake.length - 1].y,
        });
      }
    } else if (this.direct === 'ArrowLeft') {
      if (this.snake[this.snake.length - 1].x === 0) {
        this.snake.push({
          x: this.border.width,
          y: this.snake[this.snake.length - 1].y,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x - 1,
          y: this.snake[this.snake.length - 1].y,
        });
      }
    } else if (this.direct === 'ArrowDown') {
      if (this.snake[this.snake.length - 1].y === this.border.height) {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: 0,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y + 1,
        });
      }
    } else if (this.direct === 'ArrowUp') {
      if (this.snake[this.snake.length - 1].y === 0) {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.border.height,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y - 1,
        });
      }
    }
    if (!this.isEat()) {
      this.snake.shift();
    }
    this.draw();
    setTimeout(() => {
      this.move({ time });
    }, time);
  }

  turn({ direct }) {
    if (this.direct === 'ArrowUp' && direct === 'ArrowDown') {
      return;
    } else if (this.direct === 'ArrowDown' && direct === 'ArrowUp') {
      return;
    } else if (this.direct === 'ArrowLeft' && direct === 'ArrowRight') {
      return;
    } else if (this.direct === 'ArrowRight' && direct === 'ArrowLeft') {
      return;
    }
    if (direct === 'ArrowUp' ||
      direct === 'ArrowDown' ||
      direct === 'ArrowRight' ||
      direct === 'ArrowLeft') {
      this.direct = direct;
    }
  }

  init({ time }) {
    this.draw();
    this.move({ time });
  }
}


$(document).ready(async () => {
  const trash = new Trash({ container });
  trash.init({ time: 100 });
  $(window).on('keydown', (e) => {
    trash.turn({ direct: e.key });
  });
});

