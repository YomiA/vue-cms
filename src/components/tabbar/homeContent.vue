<template>
    <div>
        <mt-swipe :auto="4000">
            <!--            在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <a :href="item.url" target="_blank"><img :src="item.img"/></a>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                    <img src="../../images/menu1.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png"/>
                    <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png"/>
                    <div class="mui-media-body">商品购买</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png"/>
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png"/>
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png"/>
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        </ul>
    </div>
</template>

<script>

    import {Toast} from 'mint-ui'
    // Vue.comment(Toast.name,Toast) mint-ui 导入 js 组件 不需要这个

    export default {
        data() {
            return {
                // lunbotuList:[]
                // 保存轮播图的数组(由于访问不了服务器，所以只能创建假数据)
                lunbotuList: [
                    {img: require('./images/img.jpg'), url: 'https://www.baidu.com', id: 1},
                    {img: require('./images/img2.jpg'), url: 'https://dnf.qq.com/', id: 2},
                    {img: require('./images/img3.jpg'), url: 'https://sg.qq.com/', id: 3}
                ]
            }
        },

        created() {
            // this.getLunbotu();
        },

        methods: {
            // getLunbotu(){ // 获取轮播图数据的方法  vue-resource 的 url 的前面是不能加斜杠的
            //     this.$http.get('api/getLunbo').then(result => {
            //         // console.log(result.body)
            //         if (result.body.status === 0){
            //             // 获取数据成功
            //             this.lunbotuList = result.body.message;
            //             // Toast("数据获取成功。。。")
            //         } else{
            //             // 获取数据失败
            //             Toast("数据获取失败。。。")
            //         }
            //     })
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 300px;

    .mint-swipe-item:nth-child(1) {
        background-color: cyan;
    }

    .mint-swipe-item:nth-child(2) {
        background-color: yellow;
    }

    .mint-swipe-item:nth-child(3) {
        background-color: blue;
    }

    .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;

    .mui-table-view-cell {
        border: 0;

    img {
        width: 60px;
        height: 60px;
    }

    .mui-media-body {
        font-size: 13px;
    }

    }
    }


</style>