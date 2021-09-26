import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import List from '../pages/list.vue'
import Detail from '../pages/detail.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Index
    },{
        path: '/list',
        name: 'List',
        component: List
    },{
        path: '/list/:id',
        name: 'Detail',
        component: Detail
    }]
})

export default Router