<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around">

      <v-card v-for="(value, key ) in routes" :key="key" class="pa-2 mt-8" height="50px" width="calc(30%)">
        <router-link :to="value.path">
          <button style="width: 100%; height: 100%;">
            {{ value.name }}
          </button>
        </router-link>
      </v-card>

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

      <v-btn color="deep-purple accent-4" text>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
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
}
</script>
