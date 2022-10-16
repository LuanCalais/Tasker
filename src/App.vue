<script setup lang="ts">
import asideBar from "./components/asideBar.vue";
import formTask from "./components/formTask.vue";
</script>

<template>
  <aside class="column is-one-quarter">
    <asideBar />
  </aside>
  
  <section class="column is-three-quarter content">
    <formTask /> 
  </section>

</template>

<style scoped>

  aside{
    padding: 0;
  }

</style>
