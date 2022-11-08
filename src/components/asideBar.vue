<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Task Tracker" />
    </h1>

    <button class="button" @click="changeTheme">{{textInput}}</button>

    <nav class="panel mt-5">
      <ul>
        <li class="mt-3">
          <router-link to="/" class="link">
            <i class='bx bx-notepad'></i>
            Tasks
          </router-link>
        </li>
        <li class="mt-3">
          <router-link to="/projects" class="link">
            <i class='bx bxs-book-content'></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "asideBar",
  emits: ["onChangeTheme"],
  data() {
    return {
      darkMode: false
    }
  },

  computed: {
    textInput(): string {
      if(!this.darkMode){
        return `Dark Mode`
      }else{
        return `Light Mode` 
      }
    }
  },

  methods: {
    changeTheme(): void{
      this.darkMode = !this.darkMode
      this.$emit("onChangeTheme", this.darkMode)
    }
  }

});
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: #112c44;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}

img{
    margin-top: 2em;
    width: 200px;
}

.button{
    margin-top: 2em;
    transition: .2s;
}

.button:hover{
    transition: .2s;
    color: #fff;
    background-color: #0e1d2b;
}

.link{
  cursor: pointer;
  color: #fff;
}

.link:hover {
  color: #faf0ca;
}

</style>
