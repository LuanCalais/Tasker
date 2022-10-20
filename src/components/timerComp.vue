<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <stop-watch :timeSeconds="timeSeconds" />
    <primary-button
      icon="bx bx-play"
      text="play"
      @clicked="start"
      :disabled="stopWatchInit"
    />
    <primary-button
      icon="bx bx-pause"
      text="stop"
      @clicked="stop"
      :disabled="!stopWatchInit"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stopWatch from "./stopWatch.vue";
import primaryButton from "./primaryButton.vue";

export default defineComponent({
  name: "timerComp",
  data() {
    return {
      timeSeconds: 0,
      stopWatch: 0, //Cont 
      stopWatchInit: false,
    };
  },

  components: {
    "stop-watch": stopWatch,
    "primary-button": primaryButton,
  },

  methods: {
    start() {
      this.stopWatchInit = true;

      // Increment 1++ in 1 second
      this.stopWatch = setInterval(() => {
        this.timeSeconds++;
      }, 1000);
    },

    stop() {
      this.stopWatchInit = false;

      // Stop the stopWatch
      clearInterval(this.stopWatch)

      /* 
          here we go to emit the timer to parent component
          befor set 0 to timeSeconds 
      */

      this.timeSeconds = 0
    },
  },
});
</script>

<style scoped></style>
