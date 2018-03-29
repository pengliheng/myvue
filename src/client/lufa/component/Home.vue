<template>
	<div class="home">
		<h1>首页</h1>
        <p>也许应该都长成一个样子</p>
	</div>
</template>

<script>

</script>

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

.home {
	padding: 0 0.5rem;
}
</style>
