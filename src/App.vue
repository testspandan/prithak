<template>
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component">

      </component>
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/*
.route-enter-from{
  opacity:0;
  transform: translateX(100vw);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.router-leave-to{
  opacity: 0;
  transform: translateX(-100vw);
}
.route-move,
.route-leave-active{
  transition: all 0.3s ease-in;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
*/
.route-enter-active,
.route-leave-active {
  transition: opacity 0.15s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0.25;
}
</style>
