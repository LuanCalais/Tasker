<template>
    
    <div class="box form-task">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para a criação de uma nova tarefa"> 
                <input type="text" class="input" maxlength="80" placeholder="Descrição tarefa" v-model="description">
            </div>

            <div class="column">
                <timer-comp />
            </div>
        </div>

    </div>

</template>

<script lang="ts">
import timerComp from './timerComp.vue'
import { defineComponent } from "vue";

    export default defineComponent({
        name: "formTask",
        components:{
            'timer-comp': timerComp
        },
        data(){
            return{
                description: ''
            }
        }
    })

</script>

<style scoped>

    .input{
        font-weight: 300;
    }

</style>