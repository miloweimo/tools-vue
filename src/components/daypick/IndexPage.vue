<template>
  <div>
    choose:
    <select
      v-model="selectedYear"
      style="border: 1px solid;"
    >
      <option
        v-for="year in availableYears"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: null,
    };
  },
  computed: {
    availableYears() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = 0; i < 10; i++) {
        years.push(currentYear + i);
      }
      return years;
    },
  },
};  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
