<template>

  <table class="table is-fullwidth">
    <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Editar</th>
        <th>Excluir</th>
    </thead>
  </table>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'List'
    })
</script>