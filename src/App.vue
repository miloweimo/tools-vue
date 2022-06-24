<template>
  <v-app>
    <div class="hide"></div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.hide {
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
  background-image: url(https://static.v2ex.com/tiles/cake.jpg), url(https://v2ex.com/static/img/shadow.png);
  background-repeat: repeat, repeat-x;
  box-shadow: inset 0 0 0 100vh rgba(255, 255, 255, 0.28);
  filter: blur(2px);
}
</style>