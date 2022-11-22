<script setup>
import * as Vue from 'vue'

onMounted((p) => {
  console.log(p, 'onMounted!');
});

</script>

<template>
  <div>
    <p>hello test!</p>
  </div>
</template>
