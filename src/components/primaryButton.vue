<template>
  <button class="button">
    <span class="icon">
        <i :class='icon'></i>
    </span>
    <span>{{text}}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'primaryButton', 
    props: {
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>
i{
    font-size: 2rem;
}
</style>