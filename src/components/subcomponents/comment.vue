<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment()">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in commentContent">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp&nbsp用户:{{ item.user }}&nbsp&nbsp发表时间:{{ item.date | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === "" ? "此用户很懒，啥都没留" : item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>

    import {Toast} from "mint-ui";

    export default {
        data() {
            return {
                // pageIndex: 1, //默认显示第一页数据
                // comments: [], // 所有的评论数据
                msg: '', // 评论输入的内容
                commentContent: [
                    {user: "小明", date: new Date(), content: "湖北黄梅近500名高考生因暴雨被困"},
                    {user: "真相奔跑吧", date: new Date(), content: "花泽香菜官宣与小野贤章结婚"},
                    {user: "小刚", date: new Date(), content: ""},
                    {user: "新浪娱乐", date: new Date(), content: "李荣浩回应新歌歌词九个字"},
                    {user: "QQ消息", date: new Date(), content: "爷爷奶奶花百万给孙女补课"},
                    {user: "北京日报客户端", date: new Date(), content: "2020年版第五套人民币5元纸币将发行"},
                    {user: "北京日报客户端", date: new Date(), content: ""}
                ]
            }
        },

        created() {
            // this.getComment()
        },

        methods: {
            //     getComment() {
            //         // /api/getcomments/:artid?pageindex=1
            //         this.$http.get("api/getcomments/" + this.id + "?pageindex" + this.pageIndex).then(result => {
            //             if (result.body.status === 0) {
            //                 //获取数据成功
            //                 this.comments = result.body.message;
            //                 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
            //                 this.comments = this.comments.concat(result.body.message);
            //             } else {
            //                 //获取数据失败
            //                 Toast("获取数据失败")
            //             }
            //         })
            //     },
            // getMore(){
            // this.pageIndex++;
            // this.getComment();
            // },
            postComment() { // 发表评论
                // 校验输入内容是否为空
                if (this.msg.trim().length === 0) {
                    return Toast("输入内容不能为空")
                }

                // url: /api/postcomment/:artid
                // post参数：
                // 参数1：请求的URL地址
                // 参数2：提交给服务器的数据对象{ content: this.msg }
                // 参数3：定义提交的时候，表单中数据的格式 { emulateJSON:true }
                // 由于全局设置之后，那么第三个参数就可以省略了

                // 第二个参数的 content 不是乱写的 ，是根据 API 来的 API是啥 这就是啥
                /*this.$http.post('api/postcomment/'+this.$route.params.id,{ content:this.msg.trim() }).then(result => {
                    if (result.body.status === 0){
                        // 接受数据成功，拼接出一个评论对象（对象里面的user_name，add_time，content都是要根据API的返回的JSON数据来的）
                        var cmt = { user_name:"匿名用户", add_time: Date.now(), content: this.msg.trim() };
                        this.comments.unshift(cmt);
                        this.msg = "";
                    }else {
            //                 //获取数据失败
            //                 Toast("获取数据失败")
            //             }
                })*/

                else {
                    var cmt = {user: "匿名用户", date: new Date(), content: this.msg.trim()}
                    this.commentContent.unshift(cmt);
                    this.msg = "";
                }

            }
        },
        // props: ["id"]

    }
</script>

<style lang="scss" scoped>
    .cmt-container {

    h3 {
        font-size: 18px;
    }

    textarea {
        font-size: 14px;
        margin: 0;
        height: 85px;
    }

    .cmt-list {
        margin: 5px 0;

    .cmt-item {
        font-size: 13px;

    .cmt-title {
        line-height: 30px;
        background-color: #c0c0c0;
    }

    .cmt-body {
        line-height: 40px;
        text-indent: 2em;
    }

    }
    }
    }
</style>