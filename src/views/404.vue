<template>
  <div>
    <h1>
      404 NotFound
    </h1>
    <h2>will redirect in {{ sec }}...</h2>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  data: () => ({
    sec: 2,
    timer: null,
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.sec <= 0 ? this.$router.replace({ path: '/' }) : this.sec = this.sec - 1
    }, 1000)
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
};
</script>
