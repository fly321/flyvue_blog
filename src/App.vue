<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/header/Header.vue";

</script>

<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>

    <div class="main">
      <RouterView />
    </div>

    <div class="footer">
      <p>© 2021 flyBlog</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .container{
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }
  @media screen and (max-width: 1000px){
    .container{
      width: 100%;
      height: 100vh;
    }
  }
</style>
