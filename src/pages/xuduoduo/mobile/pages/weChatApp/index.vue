<template>
	<div class="wechatapp">
    <div class="sider">
      <ul>
        <router-link tag="li" :to="'/xuduoduo/wechatapp/list'" exact>wx/list</router-link>
        <router-link tag="li" :to="'/xuduoduo/wechatapp/show'">wx/show</router-link>
      </ul>
    </div>
    <router-view/>
	</div>

</template>

<script>

</script>

<style lang="less">
  .wechatapp {
    padding: 0 0.5rem;
  }
</style>
