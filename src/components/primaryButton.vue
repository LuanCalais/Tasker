<template>
  <button class="button" @click="clicked">
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
    emits: ['clicked'],
    props: {
        disabledBtn: {
            type: Boolean
        },
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },

    methods: {
        clicked() :void{
            this.$emit('clicked')
        }
    }
});
</script>

<style scoped>  
i{
    font-size: 2rem;
}
</style>