<template>
  <div id="app">
    <div id="nav" class="mt-4">
      <router-link to="/" class="font-bold text-gray-700">Home</router-link>
      |
      <router-link to="/about" class="font-bold text-gray-700"
        >About</router-link
      >
    </div>
    <router-view />
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

#nav a.router-link-exact-active {
  color: #2b6cb0;
}
</style>
