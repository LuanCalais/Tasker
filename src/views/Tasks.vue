<template>
  <formTask @saveTask="showTask" @isErr="showError" @isSucc="showSuccess" />

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
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import formTask from "@/components/formTask.vue";
import taskList from "@/components/tasksList.vue";
import boxItemList from "@/components/boxItemList.vue";
import type ITask from "@/components/interfaces/ITask";
import type ISucc from "@/components/interfaces/ISucc";
import type IErr from "@/components/interfaces/IErr";

export default defineComponent({
  name: "App",
  components: {
    formTask,
    taskList,
    boxItemList,
  },

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
        this.tasks.push(task)
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

    showSuccess(succ: ISucc) {
      if (succ) {
        this.succMesage.isSucc = succ.isSucc;
        this.succMesage.description = succ.description;
      }
      setTimeout(() => {
        this.succMesage.isSucc = false;
      }, 2500);
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
.task-list {
  margin: 1rem;
}

.empty-list {
  background-color: #f7d046;
}

</style>
