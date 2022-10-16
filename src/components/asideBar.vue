<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Task Tracker" />
    </h1>

    <button class="button">Tema</button>

  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "asideBar",
});
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: #112c44;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}

img{
    margin-top: 2em;
    width: 200px;
}

.button{
    margin-top: 2em;
    transition: .2s;
}

.button:hover{
    transition: .2s;
    color: #fff;
    background-color: #0e1d2b;
}

</style>
