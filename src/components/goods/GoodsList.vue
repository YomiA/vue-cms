<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/a1.jpg">
            <h1 class="title">
                鄱阳湖各水文站全线告急
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>销售中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/a1.jpg">
            <h1 class="title">
                美媒：“猫王”外孙本杰明·基奥自杀年仅27岁，长相酷似外公
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>销售中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/a1.jpg">
            <h1 class="title">
                鄱阳湖各水文站全线告急
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>销售中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-flow: wrap;
        padding: 7px;
        justify-content: space-between;
    }

    .goods-item{
        width: 49%;
        margin: 4px 0;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 227px;
    }

    .goods-item img{
        width: 100%;
    }

    .title{
        font-size: 14px;
    }

    .info{
        background-color: #eeeeee;
    }

    .info p{
        margin: 0;
        padding: 5px;
    }

    .price{

    }

    .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }

    .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }


</style>