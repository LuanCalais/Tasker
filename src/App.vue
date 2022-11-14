<script setup lang="ts">
import { defineComponent } from "vue";
import asideBar from "./components/asideBar.vue";
import type ITask from "./components/interfaces/ITask";
import PrimaryNotifications from "./components/primaryNotifications.vue"

</script>

<template>
  <main :class="{'is-dark-mode' : isDark}">
    <aside class="column is-one-quarter">
      <asideBar @onChangeTheme="themeVerify" />
    </aside>

    <section class="column is-three-quarter content">
      <PrimaryNotifications></PrimaryNotifications>

      <router-view></router-view>
    </section>
    
  </main>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      tasks: [] as ITask[],
      isDark: false,
    };
  },
  methods: {
    themeVerify(theme: boolean): void {
      this.isDark = theme
    },
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
});
</script>

<style scoped>
main {
   display: flex; 
   box-sizing: border-box; 
  --bg-primary: #fff;
  --txt-primary: #000;
  --bg-secondary: #112c44;
}
main.is-dark-mode{
  --bg-primary: #2b2d42;
  --txt-primary: #ddd;
  --bg-secondary: #000;
}

header{
  background-color: var(--bg-secondary);
}

.content{
  background-color: var(--bg-primary);
}

aside {
  padding: 0;
}


.err-notification,
.success-notification {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
</style>
