<template>
  <section>
    <router-link to="/projects/new" class="button">
      <span class="icon is-small">
        <i class='bx bx-plus'></i>
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
    </table>
  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'List'
    })
</script>