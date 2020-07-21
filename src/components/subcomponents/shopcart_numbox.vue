<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='10' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numbox" readonly/>
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
                // 数量改变了
                console.log("这ID是"+this.goodsId+"数量是"+this.$refs.numbox.value) //数量值
                // 每当数量值改变，则立即把最新的数量同步到 购物车的 store 中，覆盖之前的数量值
                this.$store.commit('updateGoodsNum',{
                    id:this.goodsId,
                    count: this.$refs.numbox.value
                })
            }
        },
        props:['initCount','goodsId']
    }
</script>

<style scoped>

</style>