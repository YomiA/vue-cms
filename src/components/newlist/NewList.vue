<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in getNewList" :key="item.id">
                <router-link :to="'/home/NewsInfo/'+item.id+item.content+item.freque+item.date">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        <h1>{{ item.content }}</h1>
                        <p class='mui-ellipsis'>
<!--                            dateFormat('YYYY-MM-DD') 后面可以加参数 不加参数就是默认的-->
                            <span>时间：{{ item.date | dateFormat }}</span>
                            <span>点击:{{ item.freque }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
                    <div class="mui-media-body">
                        <h1>木屋</h1>
                        <p class='mui-ellipsis'>
                            <span>时间：2020-07-04 17:48</span>
                            <span>点击:5次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                // NewList:[],// 定义一个空数组，存放获取到的数据
                getNewList: [
                    {img: require('../../images/shuijiao.jpg'), content: '幸福', date: new Date(), freque: 5, id: 1},
                    {img: require('../../images/muwu.jpg'), content: '木屋', date: new Date(), freque: 15, id: 2},
                    {img: require('../../images/cbd.jpg'), content: '树林', date: new Date(), freque: 32, id: 3},
                    {img: require('../../images/shuijiao.jpg'), content: '绿树', date: new Date(), freque: 20, id: 4},
                    {img: require('../../images/muwu.jpg'), content: '小河', date: new Date(), freque: 17, id: 5},
                    {img: require('../../images/cbd.jpg'), content: '小兔', date: new Date(), freque: 28, id: 6},
                    {img: require('../../images/shuijiao.jpg'), content: '蝴蝶', date: new Date(), freque: 66, id: 7},
                    {img: require('../../images/muwu.jpg'), content: '紫竹', date: new Date(), freque: 24, id: 8},
                    {img: require('../../images/cbd.jpg'), content: '别墅', date: new Date(), freque: 50, id: 9},
                    {img: require('../../images/shuijiao.jpg'), content: '康乃馨', date: new Date(), freque: 88, id: 10}
                ]
            }
        },

        created(){
            // 页面刚刚加载的时候就要开始调用了
          // getNewList();
        },

        methods:{
            // 获取新闻列表
            // getNewList(){
            //     this.$http.get('api/getnewslost').then(result => {
                    // 获取成功之后，应该把数据保存到 data[一个 NewList 数组] 上
                    // if (result.body.status === 0){
                    //     this.NewList = result.body.message
                    // }else{
                        // 获取失败之后
                        // Toast("获取数据失败！！")
            //         }
            //     })
            // }
        },

        // filters: {
        //     'dateFormat': function (dateStr,pattern="YYYY-MM-DD") {
        //         let dt = new Date(dateStr);
        //         let y = dt.getFullYear();
        //         let m = (dt.getMonth() + 1).toString().padStart(2, "0")
        //         let d = dt.getDate().toString().padStart(2, "0")
        //         if (pattern.toLowerCase() === "yyyy-mm-dd") {
        //             return `${y}-${m}-${d}`;
        //         }
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {

    li {

    h1 {
        font-size: 14px;
    }

    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }

    }
    }


</style>