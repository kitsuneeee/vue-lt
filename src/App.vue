<template>
  <div id="app">
    <div id="nav">
      <router-link to="/sample1">sample1</router-link>
      <router-link to="/sample2">sample2</router-link>
      <router-link to="/sample3">sample3</router-link>
      <router-link to="/sample4">sample4</router-link>
      <router-link to="/sample5">sample5</router-link>
    </div>
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 4px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content-wrap {
  padding: 0 24px;
}
</style>
