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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  min-width: 60vw;
  padding: 0 24px;
}
.parent-wrap {
  padding: 12px 24px;
  border: solid 1px black;
  .data-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      display: block;
    }
    > * {
      margin: 4px 0;
    }
  }
}
.child-wrap {
  margin: 12px;
  padding: 12px 24px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    display: block;
  }
  > * {
    margin: 4px 0;
  }
}
.bold {
  font-weight: bold;
  margin: 4px 0;
}
</style>
