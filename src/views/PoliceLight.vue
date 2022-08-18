<template>
  <div class="scrollbar-hidden">
    <div style="height: 50vh" :style="flag ? styleBlue : styleRed"></div>
    <div style="height: 50vh" :style="!flag ? styleBlue : styleRed"></div>
  </div>
</template>

<script>
export default {
  name: 'PoliceLight',
  data() {
    return {
      flag: true,
      style: "background-color: green;",
      styleBlue: "background-color: blue;",
      styleRed: "background-color: red;",
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.flag = !this.flag
    }, 200)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* Firefox */
}
</style>