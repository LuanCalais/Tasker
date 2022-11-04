<template>
  <section>
    <strong class="display">{{ elapseTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "stopWatch",
  props: {
    timeSeconds: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    elapseTime(): string{
      return new Date(this.timeSeconds * 1000).toISOString().substr(11, 8)
    }
  } 
});
</script>

<style scoped>

  .display{
    color: var(--txt-primary);
  }

</style>
