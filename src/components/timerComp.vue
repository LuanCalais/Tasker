<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <stop-watch :timeSeconds="timeSeconds" />
    <primary-button icon="bx bx-play" text="play" @clicked="start"/>
    <primary-button icon="bx bx-pause" text="stop" @clicked="stop"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stopWatch from "./stopWatch.vue";
import primaryButton from "./primaryButton.vue"

export default defineComponent({
  name: "timerComp",
  data(){
    return{
      timeSeconds: 0
    }
  },

  components: {
    "stop-watch": stopWatch,
    "primary-button": primaryButton
  },

  methods: {
    start() {
      alert('Start')
    },

    stop() {
      alert('Stop')
    }
  }

});
</script>

<style scoped></style>
