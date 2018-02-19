<template>
    <div class="wrap">
		<nav class="nav">
			<div class="header">
				<svg class="icon" viewBox="0 0 1024 1024">
					<path d="M163.36 197.184l735.52 0 0 91.968-735.52 0 0-91.968Z" p-id="997"></path>
					<path d="M163.36 461.504l735.52 0 0 91.936-735.52 0 0-91.936Z" p-id="998"></path>
					<path d="M163.36 725.824l735.52 0 0 91.936-735.52 0 0-91.936Z" p-id="999"></path>
				</svg>
				<span class="font">
					<font color="blue">G</font>
					<font color="red">o</font>
					<font color="yellow">o</font>
					<font color="blue">g</font>
					<font color="red">l</font>
					<font color="yellow">e</font>
				</span>
				<span class="right"></span>
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
		<router-view/>
        <footer>
            <p>create by peng</p>
        </footer>
	</div>
</template>
<script>
	export default {
		name: 'App'
	}
	import utilsFunc from './utils/dom.js';
	const {
		getPath,
		isDomInPathFunc
	} = utilsFunc;
	window.onload = e => {
		let svgIcon = document.querySelector('svg.icon');
		let domHighLightArray = [svgIcon];
		// 为某些dom元素添加触碰高亮
		domHighLightArray.forEach(dom=>{
			domListHighLight({
				dom,
				style: 'styleHover'
			})
		})
		// 18873372281
		// 全局点击代理
		touchEndGlobalProxy({
			event:'touchend'
		})
		// 让url里面的高亮
		currentLinkHighLight()
	}
	let currentLinkHighLight = args => {
		let currentLink = location.pathname.split('/')[1];
		if(currentLink != ""){
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
	grid-template-rows: 1.5rem 2fr;

	.nav {
		height: 1.5rem;
		.header {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: inline-flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.font{
				.font-dpr(24px);
				letter-spacing: -0.07rem;
			}
			.icon {
				z-index: 1;
				padding: 0.4rem;
				color: #757575;
				height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
				.font-dpr(24px);
			}
			.right {
				width: 1.7rem;
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
						cursor: pointer;
					}
				}
			}
		}
	}

	footer {
		height: 2rem;
		grid-row: 6;
		display: grid;
		align-items: center;
		.font-dpr(20px);
		background: var(--dark);
		color: var(--light);
		text-align: center;

		p {
			margin: 0;
			padding: 0;
		}
	}
}
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {font-size: @font-size * 2}
    [data-dpr="3"] & {font-size: @font-size * 3}
}
</style>
