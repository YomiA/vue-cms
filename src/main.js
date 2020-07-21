// js 入口文件
import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';

// 1.2 安装路由模块
Vue.use(VueRouter);

// 注册vuex
import Vuex from 'vuex'

Vue.use(Vuex);

// 每次刚刚进入网站 肯定会 调用 main.js，在刚刚调用的时候，先从本地存储中，把购物车的数据读取出来放到 store 中
var cart = JSON.parse(localStorage.getItem('car') || "[]")

var store = new Vuex.Store({
    state:{ // this.$store.state.****
        cart:cart // 将购物车中的商品的数据，用一个数组存储起来，在 cart 数组中，存储一些商品的对象，咱们可以暂时将这个商品对象设计成这样
        // {id:商品的id, count:要购买的数量,price:商品的价格,selected:false[是否选中]}
    },
    mutations:{ // this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCart(state,cartinfo){ // 点击加入购物车按钮，把商品信息保存到 store 中的 cart 上去
            // 假设 在购物车中，没有找到对应的商品
            var flag = false;
            // 如果购物车中，之前就已经有这个对于的商品了，那么，只需要更新数量就行了
            state.cart.some(function (item) {
                if (item.id == cartinfo.id){
                    item.count = item.count + parseInt(cartinfo.count);
                    flag=true;
                    return true // 找到之后，终止some 后续的循环
                }
            });
            // 如果没有，就直接把商品数据 push 到 cart 数组中去
            // 如果最终 循环完毕，得到的 flag 还是 false 则把商品数据直接 push 到购物车中
            if(flag === false){
                state.cart.push(cartinfo)
            }

            // 当更新 cart 数组后，把 cart 数组整个给存到 localStorage 中
            localStorage.setItem('car',JSON.stringify(state.cart));
        },
        updateGoodsNum(state,goodsNum){
            //修改购物车中商品的数量值
            // some循环所有的商品，找到这个商品的id等于传过来的最新的商品的id，那么这个最新的数量值就应该覆盖到这个商品的数量值上
            state.cart.some(item => {
                if (item.id == goodsNum.id){
                    item.count = parseInt(goodsNum.count)
                    return true
                }
            })
            // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中去
            localStorage.setItem('car',JSON.stringify(state.cart));
        },
        removeFormCart(state,id){
            // 根据 id 从 store 中删除购物车对应的商品数据
            state.cart.some(function (item,i) {
                if (item.id == id){
                    state.cart.splice(i,1);
                    return true;
                }
            })
            // 将删除完毕后的最新的购物车信息存储到本地存储中去
            localStorage.setItem('car',JSON.stringify(state.cart));
        },
        updateGoodsSelected(state,info){
            state.cart.some(function (item) {
                if (item.id == info.id){
                    item.selected = info.selected;
                }
            })
            // 把最新的 所有 购物车的商品的 状态保存到 store 中去
            localStorage.setItem('car',JSON.stringify(state.cart));
        }
    },
    getters:{ // this.$store.getters.****
        // 相当于计算属性 computed 也相当于 filters，getters依赖于 state 中的 cart 数组，它改变，getters也会随着改变
        getAllCount(state){
            // 定义一个总数量为0
            var allCount = 0;
            state.cart.forEach(function (item) {
                allCount = allCount + item.count
                // console.log("总数量为："+allCount)
            })
            return allCount
        },
        getGoodsCount(state){
            // 定义一个空对象
            var goodsCount = {};
            // 循环购物车里面的所有商品
            state.cart.forEach(function (item) {
                // 每次循环都能拿到商品的id 和 数量， 每个商品的 item.id 作为属性的键，每个商品的 item.count 作为属性的值
                goodsCount[item.id] = item.count;
            });
            // goodsCount 挂载了这个商品的id和这个商品的数量之间的关系
            return goodsCount;

        },
        getGoodsSelected(state){
            var selectedValue = {};
            state.cart.forEach(function (item) {
                selectedValue[item.id] = item.selected;
            })
            return selectedValue;
        },
        getAllGoodsCountAndAmount(state){
            var allGoods = {
                count:0,
                amount:0
            }
            state.cart.forEach(function (item) {
                if (item.selected){
                    allGoods.count = allGoods.count+item.count;
                    allGoods.amount = item.price * allGoods.count;
                    console.log("价格是"+item.price+"数量是"+item.count);
                }
            })
            return allGoods
        }
    }
})

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
    router,
    store // 挂载 store 状态管理对象
});