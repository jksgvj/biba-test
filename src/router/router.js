import { createRouter, createWebHistory } from "vue-router"
import AboutUs from "@/pages/AboutUs"
import Messenger from "@/pages/Messenger"
import TaskManager from "@/pages/TaskManager"

const routes = [
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
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;