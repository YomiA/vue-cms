<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
// 因为这是 js 操作，所以要初始化一下，不然点击不生效，怎么初始化，去官网查看API
import mui from '../../lib/mui/js/mui.min.js'
    export default {
        mounted() {
            mui(".mui-numbox").numbox();
        }
    }
</script>

<style scoped>

</style>