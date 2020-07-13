import VueRouter from 'vue-router'

// 导入四个路由组件
import home from './components/tabbar/homeContent.vue'

import member from './components/tabbar/memberContent.vue'

import shopcart from './components/tabbar/shopcartContent.vue'

import search from './components/tabbar/searchContent.vue'

import NewList from './components/newlist/NewList.vue'

import NewsInfo from './components/newlist/NewsInfo.vue'

import photolist from './components/photos/photolist.vue'

import PhotoInfo from './components/photos/PhotoInfo.vue'

import GoodsList from './components/goods/GoodsList.vue'

// 创建路由对象
var router = new VueRouter({
    routes:[ // 配置路由规则
        { path:'/',redirect:'/home' }, // 路由重定向，默认进入首页
        { path:'/home',component:home },
        { path:'/member',component:member },
        { path:'/shopcart',component:shopcart },
        { path:'/search',component:search },
        { path:'/home/newlist',component:NewList },
        { path:'/home/NewsInfo/:id:content:freque:date',component:NewsInfo },
        { path:'/home/photolist',component:photolist },
        { path:'/home/photoinfo/:id',component:PhotoInfo },
        { path:'/home/goodslist',component:GoodsList }
    ],
    linkActiveClass:'mui-active' // 覆盖默认的的路由高亮的类，默认的类是router-link-active
})

//把路由对象暴露出去，不然外面接收不到
export default router