import './index.less';

const div = document.createElement('div');

div.innerText = 'lufa';


let arr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const span = document.createElement('span');

span.innerHTML = '12';


span.className = 'list';
arr = arr.map(arr1 => arr1.map(() => span));


const contianer = document.createElement('div');
div.className = 'container';
div.innerHTML


console.log(arr);


document.body.appendChild(div);
