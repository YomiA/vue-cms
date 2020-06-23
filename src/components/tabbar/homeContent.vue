<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3>this is home</h3>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui'
    // Vue.comment(Toast.name,Toast) mint-ui 导入 js 组件 不需要这个

    export default {
        data(){
            return{
                // lunbotuList:[]
                // 保存轮播图的数组(由于访问不了服务器，所以只能创建假数据)
                lunbotuList:[
                ]
            }
        },

        created(){
          this.getLunbotu();
        },

        methods:{
            getLunbotu(){ // 获取轮播图数据的方法
                this.$http.get('http://vue.studyit.io/api/getLunbo').then(result => {
                    // console.log(result.body)
                    if (result.body.status === 0){
                        // 获取数据成功
                        this.lunbotuList = result.body.message;
                        // Toast("数据获取成功。。。")
                    } else{
                        // 获取数据失败
                        Toast("数据获取失败。。。")
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 300px;

    .mint-swipe-item:nth-child(1) {
        background-color: cyan;
    }

    .mint-swipe-item:nth-child(2){
         background-color: yellow;
     }
    .mint-swipe-item:nth-child(3){
         background-color: blue;
     }


    }

</style>