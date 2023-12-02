import { createApp } from 'vue'
import App from './App.vue'
//import components from '@/components/UI'
import router from "@/router/router"

import './index.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
const options = {

}
// Vue.config.productionTip = false

// Vue.use(Vuelidate)

//components.forEach(component => {
//      app.component(component.name, component)
//})

app
.use(Toast , options)
    .use(router)
    .mount('#app')
