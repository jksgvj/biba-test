import { createRouter, createWebHistory } from "vue-router"
import AboutUs from "@/pages/AboutUs"
import Messenger from "@/pages/Messenger"
import TaskManager from "@/pages/TaskManager"
import Music from "@/pages/Music"
import Main from "@/pages/Main"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/aboutus',
        component: AboutUs
    },
    {
        path: '/messenger',
        component: Messenger
    },
    {
        path: '/manager',
        component: TaskManager
    },
    {
        path: '/music',
        component: Music
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;