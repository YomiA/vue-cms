<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr/>
        <!--        图片缩略图区域-->
        <div class="thumbs">

            <!--<img class="preview-img" v-for="(item,index) in list" :src="item.src" height="100" @click="$preview.open(index,list)" :key="item.src">-->

            <vue-preview :slides="list"></vue-preview>
        </div>
        <!--图片内容区域,因为服务器内容里面可能含有html标签之类的，所以接收数据的时候要用v-html-->
        <div class="content" v-html="photoinfo.content">

        </div>


        <!--        放置一个现成的评论 子组件-->

        <cmt-box :id="id"></cmt-box>

    </div>
</template>

<script>

    // 1.导入评论子组件
    import comment from '../subcomponents/comment.vue'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                photolist: {}, //图片详情
                photoinfo: {
                    add_time: new Date(),
                    click: 5,
                    content: "新华社武汉7月12日电（记者李思远）12日14时，长江干流莲花塘站水位达到34.34米并趋于平稳，长江中下游洪水洪峰正在通过城陵矶江段。据长江水利委员会预测，未来2到3天，洪峰将相继通过中下游干流各个江段，汉口、九江、大通等主要控制站的洪峰水位均将位居历史前列。气象预报显示，12日、13日，长江流域的降雨略有减弱；14日至16日，受冷空气影响，降雨将再度加强，乌江、三峡区间、洞庭湖水系西北部、汉江中游、长江中下游干流附近有大到暴雨。",
                    title: "长江中下游各江段未来几日将相继出现洪峰"
                },
                // list:[] //缩略图数组
                list: [
                    {src: require('../../images/a1.jpg'), w: 600, h: 400, msrc: require('../../images/a1.jpg')},
                    {src: require('../../images/a2.jpg'), w: 600, h: 400, msrc: require('../../images/a2.jpg')},
                    {src: require('../../images/a3.jpg'), w: 600, h: 400, msrc: require('../../images/a3.jpg')},
                    {src: require('../../images/a4.jpg'), w: 600, h: 400, msrc: require('../../images/a4.jpg')},
                    {src: require('../../images/a5.jpg'), w: 600, h: 400, msrc: require('../../images/a5.jpg')}
                ]
            }
        },

        created() {
            // this.getPhotoInfo();
            // this.getThumbs();
        },

        methods: {
            // url:/api/getimageInfo/:imgid
            // getPhotoInfo(){ // 获取图片详情
            //     this.$http.get('api/getimageInfo/'+this.id).then(result => {
            //         if(result.body.status === 0){
            //             // 尽管服务器返回的是一个数组，因为我们图片详情获取的只是这个数组里面的一个，所以我们选择第一项[0]
            //             this.photolist = result.body.message[0];
            //         }else{
            //             Toast("获取数据失败")
            //         }
            //     })
            // },
            // getThumbs(){ // 获取图片缩略图
            //     // url：/api/getthumimages/:imgid
            //     this.$http.get('api/getthumimages/'+this.id).then(result => {
            //         if (result.body.message() === 0){
            //             // 由于数据库之传给了src这一种属性，没有传w和h，所以我们要通过foreach来循环每个图片的数据，补全图片的宽和高
            //             result.body.message.forEach(item => {
            //                 item.w = 600;
            //                 item.h = 400;
            //             });
            //             // 补全完整之后，再把它保存到 list 中去
            //             this.list = result.body.message;
            //         } else{
            //             Toast("数据获取失败")
            //         }
            //     })
            // }
        },
        components: {
            // 注册 评论子组件
            "cmt-box": comment
        }
    }
</script>

<style scoped>
    .photoinfo-container {
        padding: 5px;
    }

    .photoinfo-container h3 {
        color: #26a2ff;
        font-size: 13px;
        text-align: center;
        margin: 15px 0;
    }

    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }

    .content {
        font-size: 13px;
        line-height: 30px;
    }
</style>