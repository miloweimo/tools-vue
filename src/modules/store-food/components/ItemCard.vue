<template>
    <div class="item-card">
      <div class="item-card__img">
        <img :src="food.picture" :alt="food.pictureAlt">
      </div>
      <div class="item-card__content">
        <h3>{{food.name}}</h3>
        <span><a :href="food.link">{{food.linkName || food.name}}</a></span>
        <div>
          <span class="flavor" v-for="item,key in food.flavorList" :key="key">{{item}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.item-card {
  min-height: 123px;
  width: 100%;
  border: 1px solid #efe9c5;
  background-color: rgba($color: #efe9c5, $alpha: 0.5);
  display: flex;
  align-items: center;
  .item-card__img {
    // width: calc(15%);
    img {
      padding: 2px;
      height: 100px;
    }
  }
  .item-card__content {
    width: 100%;
    height: 100%;
    padding: 2px;
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
    }
    .flavor {
      font-weight: 400;
      padding-left: 2px;
      padding-right: 2px;
      margin-right: 2px;
      border: 1px solid;
      border-radius: 0.5rem;
    }
  }
}
</style>