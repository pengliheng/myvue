<template>
	<div class="home">
		<h1>
            message:{{ $route.params }}
        </h1>
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
