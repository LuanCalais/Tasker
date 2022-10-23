<template>
  <h1>{{ item.description }} - {{item.time}}</h1>
</template>

<script lang="ts">
// PropType - new types for props
import { defineComponent, type PropType } from "vue";
import type ITask from "./interfaces/ITask";

export default defineComponent({
  name: "taskList",
  props: {
    item: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
