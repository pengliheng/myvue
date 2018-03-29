<template>
	<div class="wechatapp">
    <div class="sider">
      <ul>
        <router-link tag="li" :to="'/wechatapp/list'" exact>list</router-link>
        <router-link tag="li" :to="'/wechatapp/show'">show</router-link>
      </ul>
    </div>
    <router-view/>
	</div>

</template>

<script>

</script>

<style lang="less">
  @import url("../../../common/font-dpr.less");

  .wechatapp {
    padding: 0 0.5rem;
  }
</style>
