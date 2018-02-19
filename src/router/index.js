import Router from 'vue-router'
import Vue from "vue";
import Home from "../component/Home.vue";
import Login from "../component/Login.vue";
import Register from "../component/Register.vue";
import PageNotFound from "../component/PageNotFound.vue";

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', component: Vue.component('Home', Home)},
		{ path: '/login', component: Vue.component('login', Login)},
		{ path: '/register', component: Vue.component('register', Register)},
		{ path: "*", component: Vue.component('register', PageNotFound) }
	],
	mode: 'history',
	linkActiveClass: "active",
	linkExactActiveClass: "active"
})