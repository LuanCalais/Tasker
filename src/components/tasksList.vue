<template>
  <boxItemList>
    <div class="columns">
      <div class="column is-7">
        {{ item.description }}
      </div>
      <div class="column is-5 is-flex is-flex-wrap-wrap is-justify-content-flex-end">
        <stopWatchVue :timeSeconds="item.time" />
      </div>
    </div>
  </boxItemList>
</template>

<script lang="ts">
// PropType - new types for props
import { defineComponent, type PropType } from "vue";
import type ITask from "./interfaces/ITask";
import boxItemList from "./boxItemList.vue";
import stopWatchVue from "./stopWatch.vue";

export default defineComponent({
  name: "taskList",
  props: {
    item: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
  components: {
    stopWatchVue,
    boxItemList,
  },
});
</script>

<style scoped></style>
