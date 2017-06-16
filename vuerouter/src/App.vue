<template>
  <div id="app">
    <ul>
      <li><router-link to="/info">info</router-link></li>
      <li><router-link to="/info/1">info_1</router-link></li>
      <li><router-link to="/info/2">info_2</router-link></li>
      <li><router-link to="/home">home</router-link></li>
      <li><a href="#/info">Info自定义</a></li>
      <li><a href="#/info/1">Info_1自定义</a></li>
      <li><a href="#/info/2">Info_2自定义</a></li>
      <li><a href="#/home">home自定义</a></li>
    </ul>
    <br>
    <div>
      <router-view></router-view>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
