<template>
  <formTask @saveTask="save" @isErr="showError" @isSucc="showSuccess" />

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
import { CREATE_TASK } from "@/store/typeTasksMutations";
import { useStore } from "@/store";
import formTask from "@/components/formTask.vue";
import taskList from "@/components/tasksList.vue";
import boxItemList from "@/components/boxItemList.vue";
import { computed } from "@vue/reactivity";
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
      console.error(task);
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

    showSuccess(succ: ISucc) {
      if (succ) {
        this.succMesage.isSucc = succ.isSucc;
        this.succMesage.description = succ.description;
      }
      setTimeout(() => {
        this.succMesage.isSucc = false;
      }, 2500);
    },

    async save(task: ITask) {
      try {
        if (!task.description.trim()) alert("You can't register a empty task");
        await this.store.commit(CREATE_TASK, task);
        return;
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
  },

  setup() {
    const store = useStore();
    return {
      store,
      tasks: computed(() => store.state.tasks)
    };
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
