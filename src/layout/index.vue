<template>
  <div class="layout-container">
    <header>
      <h1>这是一个头部</h1>
    </header>
    <!-- 子路由出口 -->
    <router-view />

   
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100%;

  header {
    height: 120px;
    border: 1px solid red;
  }
}
</style>
