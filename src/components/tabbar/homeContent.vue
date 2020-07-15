<template>
    <div>
<!--        轮播图区域-->
<!--        给他一个属性值 isfull 来设置是否为 100% 宽度，如果为 true 则为 100%，佛则自适应-->
        <swp-img :lunbotuList="lunbotuList" :isfull="true"></swp-img>

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

    import swipe from '../subcomponents/swipe.vue'

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
        },
        components:{
            "swp-img":swipe
        }
    }
</script>

<style lang="scss" scoped>

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