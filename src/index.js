import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import "lib-flexible";

new Vue({
	el: '#app',
	router,
	data:{
		message:'Hello id'
	},
	components: { App },
	template: '<App/>'
})

