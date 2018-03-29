import './index.less';

const div = document.createElement('div');

div.innerText = 'lufa-mobile';


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
contianer.className = 'container';
contianer.innerHTML = arr.join('');


document.body.appendChild(div);


// class quarth {
//   constructor(){
//     this.map = [];
//   }
// }
