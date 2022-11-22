<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="nameOfProject" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nameProject"
          id="nameOfProject"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { CREATE_PROJECT } from "@/store/typeMutations";

export default defineComponent({
  name: "FormProject",
  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    if (this.id) {
      console.log("Tem id");
    }
  },

  data() {
    return {
      nameProject: "",
    };
  },

  methods: {
    save() {
      this.store.commit(CREATE_PROJECT, this.nameProject);
    },
  },

  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
