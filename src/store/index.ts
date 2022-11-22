// Key for access the store
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as VuexUseStore } from "vuex";
import type IProject from "@/components/interfaces/IProject";
import { CREATE_PROJECT } from './typeMutations';

interface Estate{
    projects: IProject
}

export const key: InjectionKey<Store<Estate>> = Symbol()

export const store = createStore<Estate>({
    state:{
        projects: []
    },

    mutations: {
        [CREATE_PROJECT](state, nameProject: string){
            // @Luan--- Continuar daqui
        }
    }

})