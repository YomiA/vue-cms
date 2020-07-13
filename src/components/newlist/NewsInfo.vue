<template>
    <div class="newInfo-container">
<!--        大标题-->
        <h3 class="title">{{ newsInfo.title }}</h3>
<!--        小标题-->
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsInfo.click }}次</span>
        </p>
        <hr/>
<!--        内容区域-->
        <div class="content" v-html="newsInfo.content">
        </div>
<!--        评论子组件区域-->
        <comment-box v-bind:id="this.id"></comment-box>
    </div>
</template>

<script>

    // 导入 comment 子组件
    import commentSub from '../subcomponents/comment.vue'

    export default {
        data() {
            return {
                // 将 URL 地址中传递过来的 ID 值，挂载到 data 上，方便以后调用(this.id)
                id: this.$route.params.id,
                // content: this.$route.params.content,
                // freque: this.$route.params.freque,
                // date: this.$route.params.date,
                // NewsInfo:{} // 新闻对象(为啥是空对象，因为是就一个对象，数据就一个，不是数组)
                newsInfo:
                    {
                        nid: this.id,
                        title: '贵州一辆大巴车冲进水库，车内有高考学生',
                        add_time: '2020-07-07 14:31',
                        click: 15,
                        content: '今天中午12时左右，贵州安顺一辆载有学生的大巴车一头撞坏道路护栏，冲进虹山水库。\n' +
                            '\n' +
                            '最新消息：据@央视新闻消息，贵州冲进水库大巴内有高考学生。据安顺市委宣传部消息：今天中午' +
                            '12时左右，安顺市一辆公交车坠入虹山湖水库。当地各部门正在全力以赴组织救援，部分落水人员已送医院救治。'
                    },
            }
        },

        created() {
            // this.getNewInfo();
        },

        methods: {
            // getNewInfo(){ // 获取新闻详情
            //     // 地址是 api/getnew/:newid
            //     this.$http.get('api/getnew/'+this.id).then(result => {
            //         // 数据获取成功
            //         if (result.body.status === 0){
            //             this.NewsInfo = result.body.message[0]
            //         } else{
            //             Toast('数据获取失败')
            //         }
            //     })
            // }

        },
        components:{ // 用来 注册 子组件的 节点
            'comment-box':commentSub
        }
    }
</script>

<style lang="scss" scoped>
    .newInfo-container {
        padding: 0 5px;

    .title {
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 10px 0;
    }

    .subtitle {
        font-size: 13px;
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }

    .content {
    }

    }
</style>