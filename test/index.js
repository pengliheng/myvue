// // import styles from './index.less'
// import Vue from 'vue';
// import App from "./App.vue";
// import router from "./router";
// import "lib-flexible";

// new Vue({
// 	el: '#app',
// 	router,
// 	data:{
// 		message:'Hello id'
// 	},
// 	components: { App },
// 	template: '<App/>'
// })



// // global variable
// qwe = 'qwe'

// local variable

"use strict";

let pingpong = (e => {
  var PRIVATE = 0;
  let let_private = 10;
  return {
    inc: e => {
      PRIVATE += e;
      return PRIVATE;
    },
    dec: e => {
      PRIVATE -= e;
      return PRIVATE;
    }
  }
})()

console.log(
  pingpong.inc(3),
  pingpong.inc(3),
  pingpong.dec(10)
);