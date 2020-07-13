// js 入口文件
import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';

// 1.2 安装路由模块
Vue.use(VueRouter);

// 按需导入 Mint-UI 的组件
// import { Header , Swipe, SwipeItem, Button,Toast,Lazyload} from 'mint-ui';
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.component(Toast.name,Toast);
// Vue.use(Lazyload);

import './css/golbal.css'

// 全部导入mint-ui组件
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
// with parameters install
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
// })


// 导入时间格式化插件moment
import moment from 'moment'

// 设置时间格式全局过滤器
Vue.filter("dateFormat",function (dateStr,pattern="YYYY-MM-DD HH:MM:SS") {
    // moment() 是当前的时间  moment(dateStr) 给定的时间
    return moment(dateStr).format(pattern)
})

// 导入 vue-resource
import VueResource from 'vue-resource'

// 安装 vue-resource
Vue.use(VueResource);

// 设置请求的全局根路径
Vue.http.options.root = 'http://vue.studyit.io';

// 全局设置 post 时候表单数据格式组织形式： application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入 bootstrap 样式
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

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