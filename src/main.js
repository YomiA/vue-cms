// js 入口文件
import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';

// 1.2 安装路由模块
Vue.use(VueRouter);

// 按需导入 Mint-UI 的组件
import { Header , Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

// 导入 vue-resource
import VueResource from 'vue-resource'

// 安装 vue-resource
Vue.use(VueResource);


// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 APP 根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app', // 这个app是容器的id
    render:c => c(app),// 这个app是App.vue导入的根组件
    // 挂载路由对象到 VM 实例上
    router
});