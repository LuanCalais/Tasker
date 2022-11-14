<template>
  <div class="notification">
    <!-- <article
      class="message"
      :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.description }}</div>
    </article> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { typeNotification } from "./interfaces/INotification";
export default defineComponent({
  name: "PrimaryNotifications",
  data() {
    return {
      context: {
        [typeNotification.SUCC]: "is-success",
        [typeNotification.FAIL]: "is-danger",
        [typeNotification.ATEN]: "is-warning",
      },
    };
  },
});
</script>

<style scoped>
.notification {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
</style>
