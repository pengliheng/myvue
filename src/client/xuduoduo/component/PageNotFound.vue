<template>
	<div class="page-not-found">
		<h1>404</h1>
		<p>Page Not Found!</p>
	</div>
</template>

<style lang="less">
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {
        font-size: @font-size * 2;
    }

    [data-dpr="3"] & {
        font-size: @font-size * 3;
    }
}
.page-not-found {
	text-align: center;
	h1{
		margin: 1.5rem 0 0;
		.font-dpr(90px)
	}
	p{
		margin: 0;
		.font-dpr(20px)
	}
}
</style>
