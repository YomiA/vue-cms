<template>
    <div class="goods-container">

        <!--        商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swp-img :lunbotuList="lunbotu" :isfull="false"></swp-img>
                </div>
            </div>
        </div>

        <!--        商品购买信息区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <span class="market-price">
                            <del>￥{{ goodsInfo.market_price }}</del>
                        </span>
                        销售价：
                        <span class="sell-price">
                            ￥{{ goodsInfo.sell_price }}
                        </span>
                    </p>
                    <p class="buy-number">
                        购买数量：
                        <number-box></number-box>
                    </p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </div>
            </div>
        </div>

        <!--        商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsInfo.goods_no }}</p>
                    <p>库存情况：{{ goodsInfo.stock }}</p>
                    <p>上架时间：{{ goodsInfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>

    // 1. 导入轮播图 子组件
    import swipe from '../subcomponents/swipe.vue'

    import numberBox from '../subcomponents/goodsInfo_numberBox.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data中，方便后期调用
                lunbotu: [ // 存放轮播图数据
                    {img: require("../../images/danxian.jpg")},
                    {img: require("../../images/aizhuer.jpg")},
                    {img: require("../../images/saier.jpg")},
                    {img: require("../../images/aomanlu.jpg")},
                    {img: require("../../images/yiqian.jpg")},
                    {img: require("../../images/yishige.jpg")},
                ],
                goodsInfo: { // 存放商品信息的空对象
                    title: "艾珠儿 连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙刺绣格子衬衫中长款雪纺裙子两件套套装裙",
                    add_time: new Date(),
                    goods_no: "SD3973042344",
                    stock: 500,
                    market_price: 296,
                    sell_price: 148
                }
            }
        },

        created() {
            // this.getLunBoTu();
            // this.getGoodsInfo();
        },

        methods: {
            // url:/api/getimageInfo/:imgid
            // getLunBoTu() {
            //     this.$http.get("api/getimageInfo/" + this.id).then(result => {
            //         if (result.body.status === 0) {
            //             // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组建中，只认识 item.img 属性，不认识 item.src
            //             // 但是恰恰不巧的是，服务器后台返回的数据是 src 所以我们要对后台返回的数据 做一下处理，把src设置成img属性
            //             result.body.message.forEach(item => {
            //                 item.img = item.src;
            //             })
            //             this.lunbotu = result.body.message;
            //         } else {
            //             Toast("获取数据失败！！")
            //         }
            //     })
            // },
            // getGoodsInfo(){
            //     // 获取商品信息 url: /api/goods/getinfo/:id
            //     this.$http.get('api/goods/getinfo/'+this.id).then(result => {
            //         if (result.body.status === 0){
            //             this.goodsInfo = result.body.message[0];
            //         }
            //     })
            // },
            goDesc(id){ // 跳转到图文介绍页面
                this.$router.push({name:"goodsDesc",params:{ id } });
            },
            goComment(id){
                this.$router.push({name:"goodsComment",params:{ id } })
            }
        },
        components: {
            "swp-img": swipe,
            "number-box": numberBox
        }
    }
</script>

<style lang="scss" scoped>
    .goods-container {
        background-color: #eeeeee;
        overflow: hidden;
    }

    .sell-price {
        color: red;
        font-weight: bold;
    }

    .mui-card-header, .mui-card-footer {
        display: block;
    }

    .mui-card-header, .mui-card-footer button {
        margin: 15px 0;
    }
</style>