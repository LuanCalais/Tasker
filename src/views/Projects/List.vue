<template>
  <section>
    <router-link to="/projects/new" class="button">
      <span class="icon is-small">
        <i class="bx bx-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Editar</th>
        <th>Excluir</th>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{project.id}}</td>
          <td>{{project.name}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "List",

  setup() {
    const store = useStore();

    console.log(store.state.projects)

    return {
      // Reactive with computed because the value current changes 
      projects: computed(() => store.state.projects),
      store
    };
  },
});
</script>
