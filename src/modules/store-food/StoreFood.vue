<template>
  <div>
    <h1>零食清单🧾</h1>
    <ItemCard v-for="item,key in food.food" :key="key" :food="item" style="margin-bottom: 3px;"/>
  </div>
</template>

<script>
import ItemCard from './components/ItemCard.vue'
import Food from '@/modules/store-food/food.js';

export default {
  name: 'StoreFood',
  components: {
    ItemCard,
  },
  data() {
    return {
      food: new Food(),
    }
  },
  mounted() {
    console.log(this.food.food);
  },

}
</script>

<style>

</style>