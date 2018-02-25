import Router from 'vue-router'
import Vue from "vue";
import Home from "../component/Home.vue";
import Login from "../component/Login.vue";
import Register from "../component/Register.vue";
import PageNotFound from "../component/PageNotFound.vue";
import {
	Message
} from 'peng-component'

Vue.use(Router)

let router = new Router({
	routes: [
		{ 
			path: '/', 
			component: Vue.component('Home', Home)
		},{ 
			path: '/login', 
			name:'login',
			component: Vue.component('login', Login)
		},{ 
			path: '/register', 
			name:'register',
			component: Vue.component('register', Register)
		},{ 
			path: "*", 
			component: Vue.component('register', PageNotFound) 
		}
	],
	mode: 'history',
	linkActiveClass: "active",
	linkExactActiveClass: "active"
});
router.beforeEach((to, from,next) => {
	let isLogin = true;
	isLogin && limitRouterFunc({
		to,next,
		limitPage:['/login','/register']
	})
})

let limitRouterFunc = args => {
	const { to,next,limitPage } = args;
	if( limitPage.indexOf(to.path)>=0 ){
		next()
	} else {
		Message({
			type: "warning",
			time: 1000,					
			content: `请先登录~！`,
			next:()=>{
				console.log('然后你要登录呢？');
			}
		})
		next({path: limitPage[0]});
	}
}

export default router;