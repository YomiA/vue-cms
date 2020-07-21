<template>
    <div class="goods-container">

        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

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
                        <!--                        方法有了，通过事件调用机制 把他 传给 numberBox 子组件-->
                        <!--                        maxNum 父组件向子组件传库存量-->
                        <number-box @getcount="getSelectedCount" :maxNum="goodsInfo.stock"></number-box>
                    </p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToCart()">加入购物车</mt-button>
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
                },
                ballFlag: false, //控制小球的隐藏和显示的标识符
                selectedCount: 1 // 保存用户选中的商品数量，默认认为用户买一件
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
            goDesc(id) { // 跳转到图文介绍页面
                this.$router.push({name: "goodsDesc", params: {id}});
            },
            goComment(id) {
                this.$router.push({name: "goodsComment", params: {id}})
            },
            addToCart() { // 加入购物车
                this.ballFlag = !this.ballFlag;
                // {id:商品的id, count:要购买的数量,price:商品的价格,selected:false[是否选中]}
                // 拼接出一个要保存到 store 中 cart 数组里的 商品信息对象
                var cartinfo = {
                    id: this.id,
                    count: this.selectedCount,
                    price: this.goodsInfo.sell_price,
                    selected: true
                };
                // 调用 store 中的 mutations 来将商品加入购物车
                this.$store.commit('addToCart',cartinfo);
            },
            beforeEnter(el) {
                // 刚刚开始的时候，摆正小球位置(0,0就是小球定位的位置)
                el.style.transform = "translate(0,0)"
            },
            enter(el, done) {// 开始动画的时候
                // el.offsetWidth; 能让他动起来
                el.offsetWidth;
                // 小球终点的位置

                // 获取小球在页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();

                // 获取徽标的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect();

                // 获取位移的位置
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                // ES6 字符串的拼接
                el.style.transform = `translate(${xDist}px,${yDist}px)`;
                // 小球的动画效果
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                // 结束
                done();
            },
            afterEnter(el) {
                // 结束让小球隐藏
                this.ballFlag = !this.ballFlag
            },
            // 这个方法不是这个父组件调用，而是numberBox子组件调用，所以有可能会给父组件传一个数值，所以这边先预先规定了count值，父组件肯定要用到这个count值，所以要把他存到data 上
            getSelectedCount(count) {
                // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到 data 上
                this.selectedCount = count;
                // console.log("这是从子组件传递过来的值为："+this.selectedCount)
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

    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 560px;
        left: 151px;
    }
</style>