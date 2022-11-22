<template>
    <section>
        <form @submit.prevent="save">
            <div class="field">
                <label for="nameOfProject" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="nameProject" id="nameOfProject">
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormProject',
    props:{
        id: {
            type: String
        }
    },

    mounted(){
        if(this.id){
            console.log('Tem id')
        }
    },

    data(){
        return{
            nameProject: ''
        }
    },

    methods:{
        save(){
            alert(`O nome do seu projeto é ${this.nameProject}`)
        }
    }
})


</script>