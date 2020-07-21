<template>
    <div class="shopcart-container">
        <!--购物车商品列表区域-->
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodsList">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                                   @change="getSelectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.img">
                        <div class="goods-info">
                            <h3 class="title">{{ item.title }}</h3>
                            <p>
                                <span class="price">￥{{ item.price }}</span>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                                <!--其中item.id是拿去删除store里面的本地数据的cart里面的，而i是删除goodsList里面的数据-->
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        购物车结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner overall">
                    <div class="total">
                        <p>总计(不含运费)</p>
                        <p>
                            已勾选商品<span class="choose-num">{{ $store.getters.getAllGoodsCountAndAmount.count }}</span>件,总价：<span class="total-num">￥{{ $store.getters.getAllGoodsCountAndAmount.amount }}</span>
                        </p>
                    </div>
                    <div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
<!--            <p>{{ $store.getters.getGoodsSelected }}</p>-->
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcart_numbox.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                price:this.$route.params.price,
                goodsList: [
                    {
                        id: 1,
                        img: require('../../images/danxian.jpg'),
                        title: "丹仙连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    },
                    {
                        id: 2,
                        img: require('../../images/yishige.jpg'),
                        title: "伊时阁连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    },
                    {
                        id: 3,
                        img: require('../../images/aizhuer.jpg'),
                        title: "艾竹尔连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    },
                    {
                        id: 4,
                        img: require('../../images/saier.jpg'),
                        title: "赛尔连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    },
                    {
                        id: 5,
                        img: require('../../images/aomanlu.jpg'),
                        title: "澳曼路衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    },
                    {
                        id: 6,
                        img: require('../../images/huazihai.jpg'),
                        title: "花姿海连衣裙套装女春夏装2020新款女装韩版休闲牛仔套装裙",
                        price: 148
                    }
                ]
            }
        },

        create() {
            this.getGoodsList();
            // console.log("id是"+this.$store.state.cart.id)
        },

        methods: {
            // url:/api/goods/getshopcarlist/:ids 其中 ids为商品id字符串，多个id之间用逗号隔开，如：/api/goods/getshopcarlist/87,88，89
            // getGoodsList(){ // 获取购物车商品列表
            //     // 获取到 store 中所有的商品的id，然后拼接出一个 用逗号隔开的 字符串
            //     var idArr = [];
            //     this.$store.state.cart.forEach(item=>{
            //         idArr.push(item.id);
            //     });
            //     if (idArr.length <= 0){
            //         return;
            //     }
            //     this.$http.get('api/goods/getshopcarlist/'+idArr).then(result => {
            //         if (result.body.status === 0){
            //             this.goodsList = result.body.message;
            //         }
            //     })
            // }
            remove(id, index) {
                // 点击删除，把商品从 store 中根据传递的 id 删除，同时，把当前组件中的 goodslist 中，对应要删除的那个商品，使用
                //    对应的 index 来删除
                this.goodsList.splice(index, 1);
                this.$store.commit('removeFormCart', id);
            },
            getSelectedChange(id, val) {
                // 每当点击开关，把最新的开关状态值 同步 到 store 中
                // console.log(id+'-------'+val)
                this.$store.commit('updateGoodsSelected', {id: id, selected: val})
            }
        },
        components: {
            "numbox": numbox
        }
    }
</script>

<style scoped>
    .shopcart-container {
        background-color: #eeeeee;
        overflow: hidden;
    }

    .mui-card-content-inner {
        display: flex;
        align-items: center;
    }

    .goods-list img {
        width: 60px;
        height: 60px;
    }

    .goods-list h3 {
        font-size: 13px;
    }

    .goods-list .price {
        color: red;
        font-weight: bold;
    }

    .overall {
        display: flex;
        justify-content: space-between;
    }

    .total-num, .choose-num {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }


</style>