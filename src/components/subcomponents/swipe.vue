<template>
    <div>
        <mt-swipe :auto="4000">
            <!--            在组件中，使用v-for循环的话，一定要使用 key -->
            <!--            将来，谁使用此 轮播图 组件，谁就给我们传递一个 lunbotulist-->
            <!--            因为要传值的关系，所以涉及到父子组件，而这时，lunbotulist 应该是 父组件向子组件传值来设置-->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <a :href="item.url" target="_blank"><img :src="item.img" :class="{ 'full':isfull }"/></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        // 既然两个地方都绑定了一个 isfull 属性，那么在这里子组件这边也要接收下这个 isfull 属性
        props:["lunbotuList","isfull"]
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 300px;
        text-align: center;
    .mint-swipe-item img {
        /*width: 100%;*/
        height: 100%;
    }

    }
    /*给它设置一个100%宽度的类，然后需要就加上去，不需要就不加*/
    .full{
        width: 100%;
    }
</style>