import $ from '@pengliheng/jquery';
import './index.less';
import 'babel-polyfill';


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
      { x: 3, y: 5 },
      { x: 4, y: 5 },
      { x: 5, y: 5 },
    ];
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
  }

  move({ time }) {
    if (this.direct === 'ArrowRight') {
      // this.snake = this.snake.map((arr) => {
      // });
      if (arr.x === this.border.width) {
        return { x: 0, y: arr.y };
      }
      return { x: Number(arr.x) + 1, y: arr.y };
      this.snake.shift();
    } else if (this.direct === 'ArrowLeft') {
      this.snake = this.snake.map((arr) => {
        if (arr.x === 0) {
          return { x: this.border.width, y: arr.y };
        }
        return { x: Number(arr.x) - 1, y: arr.y };
      });
    } else if (this.direct === 'ArrowDown') {
      this.snake = this.snake.map((arr) => {
        if (arr.y === this.border.height) {
          return { x: arr.y, y: 0 };
        }
        return { x: arr.x, y: Number(arr.y) + 1 };
      });
    } else if (this.direct === 'ArrowUp') {
      this.snake = this.snake.map((arr) => {
        if (arr.y === 0) {
          return { x: arr.x, y: this.border.height };
        }
        return { x: arr.x, y: Number(arr.y) - 1 };
      });
    }
    this.draw();
    setTimeout(() => {
      this.move({ time });
    }, time);
  }

  turn({ direct }) {
    this.direct = direct;
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

