<template>
    <!--    这个是根组件-->
    <div class="app-container">
        <!--        头部 Header 部分-->
        <mt-header fixed title="我的第一个 Vue 项目">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
            </router-link>
        </mt-header>

        <!--        中间路由 router-view 部分-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--        底部 Tabbar 部分-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                flag:false
            }
        },
        
        created(){
          if (this.$route.path === '/home'){
              this.flag=false
          }   else{
              this.flag=true
          }
        },
        
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        watch:{
            "$route.path":function (newVal) {
                if (newVal === '/home'){
                    this.flag=false
                } else {
                    this.flag=true
                }
            }
        }
    }
</script>

<style scoped>

    .mui-tab-item{
        touch-action: none;
    }

    .mint-header{
        z-index: 99;
    }

    .app-container {
        padding-top: 40px;
        overflow-x: hidden;
        padding-bottom: 50px;
    }

    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }



</style>