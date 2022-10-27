<script setup lang="ts">
import { defineComponent } from "vue";
import asideBar from "./components/asideBar.vue";
import formTask from "./components/formTask.vue";
import type IErr from "./components/interfaces/IErr";
import type ITask from "./components/interfaces/ITask";
import type ISucc from "./components/interfaces/ISucc"
import taskList from "./components/tasksList.vue";
import boxItemList from "./components/boxItemList.vue";
</script>

<template>
  <aside class="column is-one-quarter">
    <asideBar />
  </aside>

  <section class="column is-three-quarter content">
    <formTask @saveTask="showTask" @isErr="showError" @isSucc="showSuccess"/>

    <div class="task-list">
      <taskList
        v-for="(tasks, index) in tasks"
        :key="`_taksKey_${index}`"
        :item="tasks"
      />
    </div>
    <boxItemList class="empty-list" v-if="emptyList">
      Você não está produtivo! Vá trabaiá
    </boxItemList>
  </section>

  <div class="err-notification" v-if="errMesage.isErr">
    <article class="message is-danger">
      <div class="message-header">O correu um erro</div>
      <div class="message-body">{{ errMesage.description }}</div>
    </article>
  </div>

  <div class="success-notification" v-if="succMesage.isSucc">
    <article class="message is-success">
      <div class="message-header">Taks Cadastrada</div>
      <div class="message-body">{{ succMesage.description }}</div>
    </article>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      tasks: [] as ITask[],
      errMesage: {
        isErr: false,
        description: "",
      },
      succMesage: {
        isSucc: false,
        description: "",
      },
    };
  },
  methods: {
    showTask(task: ITask): void {
      this.tasks.push(task);
    },
    showError(err: IErr) {
      if (err) {
        this.errMesage.isErr = err.isErr;
        this.errMesage.description = err.description;
      }
      setTimeout(() => {
        this.errMesage.isErr = false;
      }, 2500);
    },
    showSuccess(succ: ISucc){
      if(succ){
        this.succMesage.isSucc = succ.isSucc;
        this.succMesage.description = succ.description
      }
      setTimeout(() => {
        this.succMesage.isSucc = false
      }, 2500)
    }
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
});
</script>

<style scoped>
aside {
  padding: 0;
}

.task-list {
  margin: 1rem;
}

.empty-list {
  background-color: #f7d046;
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
