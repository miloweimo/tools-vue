<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around">
      <div
        v-if="!$vuetify.theme.dark"
        class="hide"
      />
      <div
        v-else
        class="hide"
        style="box-shadow: inset 0 0 0 100vh rgba(0, 0, 0, 0.6)"
      />

      <!-- 只有false才不显示 -->
      <template v-for="(value, key ) in routes.filter((item) => item.isShowIcon !== false)">
        <v-card
          v-if="
            key !== 0
              && value.path !== '*'
              && value.path !== '/404'
          "
          :key="key"
          class="pa-2 mt-8"
          height="65px"
          width="calc(30%)"
        >
          <router-link :to="value.path">
            <button style="width: 100%; height: 100%;">
              <v-icon>
                {{ value.icon || "😅" }}
              </v-icon>
              <br>
              {{ value.text || value.name }}
            </button>
          </router-link>
        </v-card>
      </template>
    </div>
    <v-bottom-navigation
      absolute
      horizontal
      style="position: fixed ;left: 0; bottom: 0;"
    >
      <v-btn
        color="deep-purple accent-4"
        text
      >
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn
        color="deep-purple accent-4"
        text
      >
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        color="deep-purple accent-4"
        text
        @click="toggleMode()"
      >
        <span>{{ $vuetify.theme.dark ? '黑暗主题' : '浅色主题' }}</span>

        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { routes } from '../router'

export default {
  name: 'HomeView',
  components: {
  },

  data: () => ({
    routes,
    selectedItem: 1,
  }),

  computed: {
    isDark(){
      return this.$vuetify.theme.dark
    }
  },

  watch: {
    isDark(newVal){
      window.localStorage.isDark = newVal
    }
  },

  mounted() {
    this.initDarkMode()
  },

  methods: {
    csl(...a) {
      console.log(...a);
    },
    toggleMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    initDarkMode() {
      let media = window.matchMedia('(prefers-color-scheme: dark)');

      if (media.matches) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }

      let callback = (e) => {
        let prefersDarkMode = e.matches;
        if (prefersDarkMode) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      };

      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
      } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
      }
    },
  },

}
</script>

<style>
.hide {
  /* z-index: -1; */
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