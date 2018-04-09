import Vue from "vue";
import Vuex from "vuex";
import iview from "iview";
import VueRouter from 'vue-router'
import draggable from 'vuedraggable'

import storeobj from "./store/store.js";
import router from "./router.js";
import app from "./components/app.vue";

Vue.use(iview);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(storeobj);

//在全局注册draggable组件
Vue.component("draggable", draggable);


new Vue({
    el : "#app" ,
    store,
    router,
    render : h => h(app)
});