import VueRouter from 'vue-router';

import shouye from "./components/shouye.vue";
 
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: shouye
        } 
    ]
});