<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around">

      <template v-for="(value, key ) in routes">
        <v-card :key="key" v-if="key !== 0
          && value.path !== '*'
          && value.path !== '/404'
        " class="pa-2 mt-8" height="50px" width="calc(30%)">
          <router-link :to="value.path">
            <button style="width: 100%; height: 100%;">
              {{ value.name }}
            </button>
          </router-link>
        </v-card>
      </template>

    </div>
    <v-bottom-navigation absolute horizontal style="position: fixed ;left: 0; bottom: 0;">
      <v-btn color="deep-purple accent-4" text>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" text>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" text @click="toggleMode()">
        <span>{{ this.$vuetify.theme.dark ? '黑暗主题' : '浅色主题' }}</span>

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

  mounted() {
    this.initDarkMode()

  },
}
</script>
