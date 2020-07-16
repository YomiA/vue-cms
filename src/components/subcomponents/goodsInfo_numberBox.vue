<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxNum'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
// 因为这是 js 操作，所以要初始化一下，不然点击不生效，怎么初始化，去官网查看API
import mui from '../../lib/mui/js/mui.min.js'
    export default {
        mounted() {
            mui(".mui-numbox").numbox();
            // console.log(this.maxNum);// 500
        },
        methods:{
            countChanged(){
                // 每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用传递给父组件
                // console.log(this.$refs.numbox.value);
                this.$emit("getcount",parseInt(this.$refs.numbox.value));
            }
        },
        props:["maxNum"],
        watch:{ // 属性监听
            // 使用 JS API 设置 numbox 的最大值
            maxNum:function (newVal,oldVal) {
                mui(".mui-numbox").numbox().setOption('max',newVal);
            }
        }
    }
</script>

<style scoped>

</style>