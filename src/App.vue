<template>
  <v-app>
    <div class="hide" @dblclick.stop="showDrawer = !showDrawer"></div>

    <v-card v-if="showDrawer" scrollable class="d-flex flex-wrap justify-space-around pa-2">
      <template v-for="n in 21">
        <v-card :key="n" class="pa-2 ma-2" height="13vh" width="calc(30%)">
          Column{{ n }}
        </v-card>
      </template>
    </v-card>

    <!-- 滚动失效 -->
<!-- 
    <div v-if="showDrawer">
      <v-navigation-drawer class="ma-8 pa-1 rounded" v-model="showDrawer" floating width="100% - ma-8"
        height="100% - ma-8">
        <v-row no-gutters>
          <template v-for="n in 21">
            <v-col :key="n" cols="4" class="pa-2">
              <v-card class="pa-2" height="14vh">
                Column{{ n }}
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-navigation-drawer>
    </div> -->

    <v-main v-show="!showDrawer">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    showDrawer: false,
  }),

  methods: {
    csl(...e) {
      console.log('click:', ...e);
    },
  },
};
</script>

<style>
.hide {
  z-index: 8;
  position: absolute;
  left: 0;
  right: 0;
  height: 30vh;
}
</style>