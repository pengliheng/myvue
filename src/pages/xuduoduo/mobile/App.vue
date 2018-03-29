<template>
    <div class="wrap">
		<nav class="nav">
			<div class="header">
				<span class="icon">
					<h1 class="brand">序多多</h1>
				</span>
				<ul>
					<router-link tag="li" :to="'/xuduoduo'" exact>首页</router-link>
					<router-link tag="li" :to="'/xuduoduo/sell'">营销</router-link>
					<router-link tag="li" :to="'/xuduoduo/set'">设置</router-link>
					<router-link tag="li" :to="'/xuduoduo/wechatapp'">小程序</router-link>
					<!-- <router-link v-bind:to="'/店铺'">店铺</router-link>
					<router-link v-bind:to="'/商品'">商品</router-link>
					<router-link v-bind:to="'/订单'">订单</router-link>
					<router-link v-bind:to="'/会员'">会员</router-link>
					<router-link v-bind:to="'/分销商'">分销商</router-link> -->
					<!-- <router-link v-bind:to="'/财务'">财务</router-link> -->
				</ul>
				<!-- <span class="login-btn"></span> -->
			</div>
			<ul class="slide-list">
				<li>
					<router-link to="/" exact id="home">
						<i class="icon fas fa-home"></i>
						首页
					</router-link>
				</li>
				<li>
					<router-link to="/work" id="work">
						<i class="icon fas fa-users"></i>
						协同办公
					</router-link>
				</li>
				<li>
					<router-link to="/mask" id="mask">
						<i class="icon fas fa-tasks"></i>
						任务管理
					</router-link>
				</li>
				<li>
					<router-link to="/store" id="store">
						<i class="icon fas fa-building"></i>
						进销存
					</router-link>
				</li>
				<li>
					<router-link to="/finance" id="finance">
						<i class="icon fas fa-money-bill-alt"></i>
						财务管理
					</router-link>
				</li>
				<li>
					<router-link to="/vip" id="vip">
						<i class="icon fas fa-user"></i>
						会员管理
					</router-link>
				</li>
				<li>
					<router-link to="/market" id="market">
						<i class="icon fas fa-user"></i>
						市场管理
					</router-link>
				</li>
				<li>
					<router-link to="people" id="people">
						<i class="icon fas fa-user"></i>
						人事管理
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="container">
			<router-view/>
		</div>
        <footer>
            <p>© 2017商城管理后台序多多 , Inc. All rights reserved.</p>
        </footer>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
	import utilsFunc from '../../utils/dom.js';
	const {
		getPath,
		isDomInPathFunc
	} = utilsFunc;
	window.onload = e => {
		// let svgIcon = document.querySelector('svg.icon');
		// let domHighLightArray = [svgIcon];
		// 为某些dom元素添加触碰高亮
		// domHighLightArray.forEach(dom=>{
		// 	domListHighLight({
		// 		dom,
		// 		style: 'styleHover'
		// 	})
		// })
		// 全局点击代理
		// touchEndGlobalProxy({
		// 	event:'touchend'
		// })
		// 让url里面的高亮
		// currentLinkHighLight()
	}
	let currentLinkHighLight = args => {
		let currentLink = location.pathname.split('/')[1];
		if(currentLink != "" && currentLink != "register" && currentLink != "login"){
			document.querySelector("#"+currentLink).classList.add('active')
		}
	}
	let touchEndGlobalProxy = args => {
		const {
			event
		} = args;
		let domProxyFunc = e =>{
			let slideList = document.querySelector('.slide-list');
			let svgIcon = document.querySelector('svg.icon');
			let isDomInPath = isDomInPathFunc({
				e, dom: svgIcon
			})
			if(isDomInPath){
				if(slideList.classList.contains('active')){
					slideList.classList.remove('active');
				}else{
					slideList.classList.add('active');
				}
			} else {
				let isMask = !isDomInPathFunc({
					e, dom: slideList
				})
				if(isMask){
					slideList.classList.remove('active');
				}else{
					let link = slideList.querySelector('a.active');
					slideList.classList.remove('active');
				}
			}
		}
		window.addEventListener(event, domProxyFunc)
	}
	let domListHighLight = args =>{
		const {
			dom,
			style
		} = args;
		let domAddFunc = e => {
			e.target.classList.add(style);
			let domRemoveFunc = e =>{
				e.target.classList.remove(style);
				dom.removeEventListener('touchend',domRemoveFunc)
			}
			dom.addEventListener('touchend',domRemoveFunc)
		}
		dom.addEventListener('touchstart',domAddFunc)
	}
</script>


<style lang='less'>
:root {
	--primary: #ddd;
	--dark: #333;
	--light: #fff;
	--shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}
.styleHover {
	background-color: #ccc;
}
html ,body{
	height: 100%;
	margin: 0;
	padding: 0;
}
ul,li{
	padding: 0;
	margin: 0;
}
.wrap {
	height: 100%;
	display: grid;
	grid-template-rows: 54px 2fr;
	grid-column-gap: 20px;
	background: rgb(231, 232, 235);

	.nav {
		height: 1rem;
		display: flex;
		justify-content: center;
		background-color: #fff;

		.header {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			max-width: 1200px;
			display: inline-flex;
			flex-direction: row;
			// justify-content: flex-start;
			align-items: stretch;
			.icon {
				flex: 0 0 200px;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA1CAYAAAAEVKRZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhENzREMDQxOTAxMTFFOEExRkNEQTAyQTE5MTZDMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhENzREMDUxOTAxMTFFOEExRkNEQTAyQTE5MTZDMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOEQ3NEQwMjE5MDExMUU4QTFGQ0RBMDJBMTkxNkMxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOEQ3NEQwMzE5MDExMUU4QTFGQ0RBMDJBMTkxNkMxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl31oUoAAA3fSURBVHja7F0JeFTV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);
				z-index: 1;
				background-repeat: no-repeat;
				background-position: center;
				color: #757575;
				// height: 100%;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
				// .font-dpr(24px);
				.brand {
					display: none;
				}
			}
			ul {
				flex: 1 1 auto;
				.font-dpr(14px);
				font-weight: bolder;
				display: flex;
				flex-direction: row;
				align-items: stretch;

				li {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					text-decoration: none;
					color:#000;
					width: 1.5rem;
					height: 100%;
					cursor: pointer;
					&:hover {
						background-color: #1C89D5;
						color: #fff;
					}
					&.active {
						background-color: #1C89D5;
						color: #fff;
					}
				}
			}
			.right {
				flex: 0 0 200px;
				// height: 100%;
			}
		}
		.slide-list {
			position: absolute;
			height: 100%;
			width: 6rem;
			top: 0;
			left: -100%;
			background-color: #fff;
			padding-top: 1.3rem;
			box-sizing: border-box;
			box-shadow: -1px 3px 20px 6px #ccc;
			transition: left 0.3s ease-in-out;
			&.active {
				left: 0;
			}
			li {
				a {
					text-decoration: none;
					display: inline-flex;
					align-items: center;
					width: 100%;
					height: 1rem;
					list-style: none;
					font-weight: 600;
					.font-dpr(17px);
					color: #666;
	
					.icon {
						.font-dpr(24px);
						width: 1.5rem;
					}
					&.active {
						background-color: indianred;
						color: #fff;
						cursor: pointer;
					}
				}
			}
		}
	}

	.container {
		background-color: #fff;
		max-width: 1200px;
		width: 100%;
		margin: 20px auto;
	}

	footer {
		height: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		.font-dpr(20px);
		color: var(--light);
		text-align: center;
		// padding: 15px 0;
		// line-height: 26px;
		font-size: 12px;
		color: #666;
	}
}
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {font-size: @font-size * 2}
    [data-dpr="3"] & {font-size: @font-size * 3}
}
</style>
