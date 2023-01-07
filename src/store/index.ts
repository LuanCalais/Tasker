// The store must be defined in main.ts file to work
// Key for access the store
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as VuexUseStore } from "vuex";
import type { INotification } from "./../components/interfaces/INotification";
import type IProject from "@/components/interfaces/IProject";
import type ITask from "@/components/interfaces/ITask";
import { CREATE_PROJECT, NOTIFY } from "./typeMutations";
import { CREATE_TASK } from "./typeTasksMutations";

interface State {
  projects: IProject[];
  notifications: INotification[];
  tasks: ITask[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [],
    tasks: [],
  },

  mutations: {
    [CREATE_PROJECT](state, nameProject: string) {
      const project = {
        id: new Date().toISOString(),
        name: nameProject,
      } as IProject;

      state.projects.push(project);
    },
    [CREATE_TASK](state: any, nameTask: string, timeTask: number) {
      const task = {
        id: new Date().toISOString(),
        description: nameTask,
        time: timeTask,
      } as ITask;

      state.tasks.push(task);
    },
    [NOTIFY](state, newNotification) {
      newNotification.id = new Date().getTime();
      state.notifications.push(newNotification);
    },
  },
});

export function useStore(): Store<State> {
  return VuexUseStore(key);
}
