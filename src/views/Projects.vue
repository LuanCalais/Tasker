<template>

    <div class="proj">
        <h1 class="title">
            Projetos
        </h1>

        <router-view></router-view> 

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Projects'
    })

</script>

<style scoped>
.proj{
    margin: 1.4rem;
}
</style>