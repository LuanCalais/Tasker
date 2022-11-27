// The store must be defined in main.ts file to work 
// Key for access the store
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as VuexUseStore } from "vuex";
import type { INotification } from './../components/interfaces/INotification';
import type IProject from "@/components/interfaces/IProject";
import { CREATE_PROJECT, NOTIFY } from './typeMutations';

interface State{
    projects: IProject[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state:{
        projects: [],
        notifications: []
    },

    mutations: {
        [CREATE_PROJECT](state, nameProject: string){
            const project = {
                id: new Date().toISOString(),
                name: nameProject
            } as IProject
            
            state.projects.push(project)
        },
        [NOTIFY](state, newNotification){
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)
        }
    }

})

export function useStore(): Store<State>{
    return VuexUseStore(key)
}





