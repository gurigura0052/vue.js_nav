<template>
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
  </ul>
</template>