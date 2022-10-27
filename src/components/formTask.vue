<template>
  <div class="box form-task">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para a criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          maxlength="80"
          placeholder="Descrição tarefa"
          v-model="description"
        />
      </div>

      <div class="column">
        <timer-comp @timerEnd="getTime" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import timerComp from "./timerComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "formTask",
  emits: ["saveTask", "isErr", "isSucc"],
  components: {
    "timer-comp": timerComp,
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    getTime(data: number): void {
      this.description = this.description.trim();
      if (!this.description) {
        console.error("Invalid description");
        this.$emit("isErr", { isErr: true, description: "Descrição inválida" });
        return;
      }
      this.$emit("isSucc", {isSucc: true, description: "Task Salva!"})
      this.$emit("saveTask", { description: this.description, time: data });
      this.description = ''
    },
  },
});
</script>

<style scoped>
.input {
  font-weight: 300;
}
</style>
