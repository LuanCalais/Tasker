// The store must be defined in main.ts file to work 
// Key for access the store
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as VuexUseStore } from "vuex";
import type IProject from "@/components/interfaces/IProject";
import { CREATE_PROJECT } from './typeMutations';

interface State{
    projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state:{
        projects: []
    },

    mutations: {
        [CREATE_PROJECT](state, nameProject: string){
            const project = {
                id: new Date().toISOString(),
                name: nameProject
            } as IProject
            
            state.projects.push(project)
        }
    }

})

export function useStore(): Store<State>{
    return VuexUseStore(key)
}





