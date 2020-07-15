<template>
    <div class="goods-list">
        <!--        <router-link class="goods-item" v-for="item in goodslist" :to="'/home/goodsinfo/'+item.id" tag="div">-->
        <!--            <img :src="item.img">-->
        <!--            <h1 class="title">-->
        <!--                {{ item.title }}-->
        <!--            </h1>-->
        <!--            <div class="info">-->
        <!--                <p class="price">-->
        <!--                    <span class="now">￥{{ item.sell_price }}</span>-->
        <!--                    <span class="old">￥{{ item.market_price }}</span>-->
        <!--                </p>-->
        <!--                <p class="sell">-->
        <!--                    <span>销售中</span>-->
        <!--                    <span>剩余{{ item.stock }}件</span>-->
        <!--                </p>-->
        <!--            </div>-->
        <!--        </router-link>-->

        <!--        在网页中，有两种跳转页面的方式-->
        <!--        方式1：使用 a 标签的形式跳转叫做标签跳转-->
        <!--        方式2：使用 window.location.href 的形式跳转，叫做编程式导航(用js代码来跳转页面)-->

        <div class="goods-item" v-for="item in goodslist" @click="goDetail(item.id)">
            <img :src="item.img">
            <h1 class="title">
                {{ item.title }}
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>销售中</span>
                    <span>剩余{{ item.stock }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        // data 是往自己组建内部，挂载一些私有数据
        data() {
            return {
                pageindex: 1, // 分页的页数，默认是第一页
                goodslist: [
                    {
                        id: 1,
                        img: require('../../images/aizhuer.jpg'),
                        title: '艾珠儿 连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙刺绣格子衬衫中长款雪纺裙子两件套套装裙',
                        sell_price: 148,
                        market_price: 296,
                        stock: 500
                    },
                    {
                        id: 2,
                        img: require('../../images/yayafushi.jpg'),
                        title: '鸭鸭服饰连衣裙2020夏季新款蕾丝女装短袖仙女超仙修身显瘦森系雪纺连衣裙一字肩上衣网纱两件套装裙子',
                        sell_price: 158,
                        market_price: 315,
                        stock: 300
                    },
                    {
                        id: 3,
                        img: require('../../images/shangbeishan.jpg'),
                        title: '尚贝珊连衣裙女装2020夏季衣服短袖新款时尚套装女韩版夏天大码显瘦休闲中长碎花雪纺棉麻两件套套装裙子',
                        sell_price: 128,
                        market_price: 249,
                        stock: 100
                    },
                    {
                        id: 4,
                        img: require('../../images/huazihai.jpg'),
                        title: '花姿海雪纺连衣裙女2020夏季新款大码女装时尚气质女士棉麻中长印小个子碎花连衣裙蕾丝两件套装裙子女',
                        sell_price: 149,
                        market_price: 290,
                        stock: 240
                    },
                    {
                        id: 5,
                        img: require('../../images/danxian.jpg'),
                        title: '丹仙奴棉麻连衣裙套装女2020时尚夏季新款韩版休闲裙子小个子连衣裙亚麻两件套 上蓝下藏青',
                        sell_price: 69,
                        market_price: 129,
                        stock: 80
                    },
                    {
                        id: 6,
                        img: require('../../images/weileman.jpg'),
                        title: '威乐曼连衣裙2020夏季新品女装时尚小清新宽松两件套套装女短袖T恤汉服收腰显瘦雪纺性感裙子',
                        sell_price: 138,
                        market_price: 270,
                        stock: 120
                    }
                ],
                goodslist2: [
                    {
                        id: 7,
                        img: require('../../images/yishige.jpg'),
                        title: '依时阁碎花雪纺连衣裙女装夏季2020新款韩版时尚短袖T恤半身裙中长款宽松棉麻小个子两件套休闲套装裙',
                        sell_price: 138,
                        market_price: 269,
                        stock: 320
                    },
                    {
                        id: 8,
                        img: require('../../images/aomanlu.jpg'),
                        title: '澳曼路 连衣裙女装夏季2020新款夏装小个子修身显瘦时尚套装小雏菊短袖女夏天衣服套装裙两件套',
                        sell_price: 128,
                        market_price: 249,
                        stock: 160
                    },
                    {
                        id: 9,
                        img: require('../../images/saier.jpg'),
                        title: '赛迩 连衣裙女2020新款夏装大码女装短袖时尚雪纺棉麻夏季女士碎花性感套装两件套夏天小个子休闲裙子',
                        sell_price: 136,
                        market_price: 280,
                        stock: 60
                    },
                    {
                        id: 10,
                        img: require('../../images/yiqian.jpg'),
                        title: '仪纤文艺清新闪亮星星连衣裙两件套2020夏季新品优雅减龄短袖印花网纱小个子学生桔梗裙中长裙',
                        sell_price: 168,
                        market_price: 299,
                        stock: 200
                    },
                    {
                        id: 11,
                        img: require('../../images/wenrou.jpg'),
                        title: '温柔素依人 吊带连衣裙2020夏季新款小雏菊时尚A字裙中长款显瘦套装洋气小雏菊中长裙两件套装裙',
                        sell_price: 168,
                        market_price: 349,
                        stock: 50
                    }
                ]
            }
        },

        created() {
            // this.getGoodsList();
        },

        methods: {
            // getGoodsList(){
            //     // url:'/api/getgoods?pageindex=number' 这是访问服务器的接口
            //     this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result => {
            //         if (result.body.status === 0){
            //             // 获取到的数据
            //             // this.goodslist = result.body.message;
            //             // 点击加载更多，新页的数据拼接上之前老的数据
            //             this.goodslist = this.goodlist.concat(result.body.message);
            //         } else {
            //             Toast("获取数据失败")
            //         }
            //     })
            // },
            getMore() {
                // this.pageindex++;
                // this.getGoodsList();
                this.goodslist = this.goodslist.concat(this.goodslist2);
            },
            goDetail(id) {
                // 使用 JS 的形式 进行路由导航,router.push('home') 后面括号里面只有一个字符串，那说明默认是一个path路径

                // 区分 this.$route 和 this.$router 这两个对象
                // 其中：this.$route 是路由参数对象，所有路由中的参数，params，query等， 都属于它
                // 其中：this.$router 是一个路由导航对象，用它 可以 方便的 使用 JS 代码，实现 路由 的前进，后退，跳转到新的 URL地址

                // console.log(this);
                // 1.最简单的一种
                // this.$router.push("/home/goodsinfo/" + id)
                // 2.传递对象
                // this.$router.push({path:"/home/goodsinfo/"+id})
                // 3.传递命名的路由
                this.$router.push({ name:"goodsinfo",params:{id} })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-flow: wrap;
        padding: 7px;
        justify-content: space-between;
    }

    .goods-item {
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

    .goods-item img {
        width: 100%;
    }

    .title {
        font-size: 14px;
    }

    .info {
        background-color: #eeeeee;
    }

    .info p {
        margin: 0;
        padding: 5px;
    }

    .price {

    }

    .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }

    .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }


</style>