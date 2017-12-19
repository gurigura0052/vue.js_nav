<template>
  <div id="app">
    <div id="top" class="header">
      <h1 class="title">vue.js nav</h1>

      <menu_nav></menu_nav>
    </div>

    <div class="content">
      <router-view/> <!-- /router/index.js で登録したコンポーネントを呼び出す -->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import nav from './components/lib/nav'

  Vue.component('menu_nav', nav)

  export default{}
</script>

<style>
  html {
    height: 100%;
  }
  body{
    height: 100%;
    margin: 0;
    background-color: silver;
    text-align: center;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    color: #2c3e50;
    background-color: white;
    width: 80%;
    margin: 0 auto;
    min-width: 600px;
    height: 100%;
    position: relative;
  ul {
    list-style-type: none;
    padding: 0;
  }
  }

  .header {
    display: block;
    margin-bottom: 20px;
  .title{
    display: inline-block;
  }
  }

  .content{
    text-align: center;
  }
</style>
