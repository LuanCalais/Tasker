<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <stop-watch />
    <primary-button icon="bx bx-play" text="play"/>
    <primary-button icon="bx bx-pause" text="stop"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stopWatch from "./stopWatch.vue";
import primaryButton from "./primaryButton.vue"

export default defineComponent({
  name: "timerComp",
  components: {
    "stop-watch": stopWatch,
    "primary-button": primaryButton
  },
});
</script>

<style scoped></style>
