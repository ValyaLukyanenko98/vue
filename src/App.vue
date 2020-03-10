<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">О бо мне</router-link> |
      <router-link to="/info">Анкета</router-link> |
      <router-link to="/team">Часть команды</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3a3c3e;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #3a3c3e;
}

#nav a.router-link-exact-active {
  color: #51734b;
}
</style>
