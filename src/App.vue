<template>
  <div id="app">
    <div id="top" class="header">
      <h1 class="title">vue.js nav</h1>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link v-bind:class="{ active: $route.path === '/' }" class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link v-bind:class="{ active: $route.path === '/page1' || $route.path === '/page1/2' }" class="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Page1</router-link>
          <div class="dropdown-menu">
            <router-link v-bind:class="{ active: $route.path === '/page1' }" class="dropdown-item" to="/page1">Page1</router-link>
            <router-link v-bind:class="{ active: $route.path === '/page1/2' }" class="dropdown-item" to="/page1/2">Page1-2</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link v-bind:class="{ active: $route.path === '/page2' }" class="nav-link" to="/page2">Page2</router-link>
        </li>
        <li class="nav-item">
          <router-link v-bind:class="{ active: $route.path === '/page3' }" class="nav-link" to="/page3">Page3</router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view/> <!-- /router/index.js で登録したコンポーネントを呼び出す -->
    </div>
  </div>
</template>

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
