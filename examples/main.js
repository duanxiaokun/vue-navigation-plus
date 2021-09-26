import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// import navigation from "../dist/vue-navigation-plus.esm";
import navigation from "../src/index";

createApp(App).use(router).use(store).use(navigation,{ router, store }).mount('#app')
