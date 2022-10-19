<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <stop-watch :timeSeconds="timeSeconds" />
    <primary-button icon="bx bx-play" text="play" @clicked="start" :disabled="stopWatchInit"/>
    <primary-button icon="bx bx-pause" text="stop" @clicked="stop" :disabled="!stopWatchInit"/>
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
      timeSeconds: 0,
      stopWatchInit: false
    }
  },

  components: {
    "stop-watch": stopWatch,
    "primary-button": primaryButton
  },

  methods: {
    start() {
      this.stopWatchInit = true
      alert('Start')
    },

    stop() {
      this.stopWatchInit = false
      alert('Stop')
    }
  }

});
</script>

<style scoped></style>
