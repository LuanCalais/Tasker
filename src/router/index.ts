import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import Tasks from '@/views/Tasks.vue'
import Projects from '@/views/Projects.vue'
import List from '@/views/Projects/List.vue'


// RouteRecordRaw - interfate to make the app routes
const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tasks',
    component: Tasks 
},{
    path: '/projects',
    component: Projects,

    children: [
        {
            path: '',
            name: 'Projects',
            component: List
        },
        // {
        //     path: 'new',
        //     name: 'New Project',
        //     component: From
        // }
    ]

}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;