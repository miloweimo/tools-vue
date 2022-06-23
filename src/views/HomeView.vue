<template>
  <div class="home">
    <button>
      <router-link to="/wdnmd">wdnmd</router-link>
    </button>
    <Button />
  </div>
</template>

<script>
import { Button } from '../components/basic/Button'

export default {
  name: 'HomeView',
  components: {
    Button,
  }
}
</script>
