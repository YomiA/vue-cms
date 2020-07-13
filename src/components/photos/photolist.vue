<template>
    <div>
        <!--        图片列表顶部滑动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!--                    给类名前面加上数据绑定 v-bind 则后面就可以写上表达式了-->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in categories"
                       :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>
        <!--        图片列表区域-->
        <ul class="photo-list">
            <!--             list 里面存的就是所有的图片,里面的 id 是每一张图片的id，不是分类列表的id-->
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <!--                 这里面的 v-lazy 里面的是 图片的地址 item.img_url-->
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">
                        {{ item.title }}
                    </h1>
                    <div class="info-body">
                        {{ item.zhaiyao }}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    // 导入mui 的js 控件
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                // cates:[], // 所有分类的列表数组
                // list:[], // 图片列表的数组
                categories: [
                    {title: "全部", id: 0},
                    {title: "精品美女", id: 1},
                    {title: "手机壁纸", id: 2},
                    {title: "清纯美女", id: 3},
                    {title: "高清图片", id: 4},
                    {title: "家居生活", id: 5},
                    {title: "明星写真", id: 6},
                    {title: "摄影器材", id: 7},
                    {title: "古典美女", id: 8}
                ],
                list: [ // 可以 再做修改
                    {
                        id: 50,
                        title: "全部",
                        img_url: require("../../images/portfolio-1.jpg"),
                        zhaiyao: "7月10日，据内蒙古“赤峰发布”微信号通报称，7月9日23时20分许，赤峰市红山区桥北悦心老年公寓（民营）发生一起命案，造成2人当场死亡，5人受伤，伤者中1人抢救无效于10日5时许死亡，其余4人生命体征平稳，嫌疑人王某某（男，81岁），已被公安机关当场抓获。"
                    },
                    {
                        id: 51,
                        title: "精品美女",
                        img_url: require("../../images/portfolio-2.jpg"),
                        zhaiyao: "新浪娱乐讯 7月10日上午，马蓉晒出九张网上爆料的有关自己不同意王宝强再婚的截图并发文否认此事，表示：“时隔不久，我又迎来了yxh的一次统一作战。麻烦以后那种臭鱼找烂虾的新闻炒作别带我。不关心。现有的不实内容已经统一交给律师处理。也希望北京市委网信办和国家广电总局严肃处理。演员靠作品说话，而不是靠炒作私生活无下限博眼球。非要炒作也与我无关，请不要再打扰我这个热爱生活幸福的铁憨憨。经历风雨，我的心中依旧充满爱！”"
                    },
                    {
                        id: 52,
                        title: "手机壁纸",
                        img_url: require("../../images/portfolio-3.jpg"),
                        zhaiyao: "9日，中国驻哈萨克斯坦大使馆发文提醒“在哈中国公民注意防范不明肺炎”，并称“该病致死率远高于新冠肺炎。”据当地媒体报道，仅6月就有628人死亡。中国疾病预防控制中心主任高福就此事表示：“没有进一步消息，正在调查。”哈萨克斯坦免疫学专家表示，该类型肺炎患者的体内并未检测出COVID-19病毒，但“99.999%仍是一种冠状病毒”。目前，针对不明肺炎患者，医疗机构采用与新冠肺炎重症患者相同的治疗方法。与此同时，新冠肺炎也正在哈萨克斯坦流行。近日，哈萨克斯坦卫生部将死亡病例的统计数据由每日更新改为每周更新。"
                    },
                    {
                        id: 53,
                        title: "清纯美女",
                        img_url: require("../../images/portfolio-4.jpg"),
                        zhaiyao: "10日，北京星权律师事务所发布王力宏律师声明，声明称长期以来有用户在多个网络平台散布“宏迪恋”“怒扇刘某一巴掌”等不实内容，甚至对王力宏正常表演呈现的内容进行恶意解读，已严重影响其个人声誉及正常生活，针对已发现的侵权内容已取证，将即刻启动诉讼程序。"
                    },
                    {
                        id: 54,
                        title: "高清图片",
                        img_url: require("../../images/portfolio-5.jpg"),
                        zhaiyao: "海外网7月10日电 据韩联社报道，当地时间10日下午，首尔高等法院对韩国前总统朴槿惠亲信干政案和国情院受贿案作出重审宣判，朴槿惠获刑20年。早前，检方要求判处朴槿惠35年有期徒刑。朴槿惠现年69岁，她自2017年10月后缺席所有庭审，此次仍然缺席。"
                    },
                    {
                        id: 55,
                        title: "家居生活",
                        img_url: require("../../images/portfolio-6.jpg"),
                        zhaiyao: "中央气象台预计，7月10日08时至11日08时，江西中北部、湖北东部和南部、湖南大部、四川盆地大部、安徽西南部、浙江北部和南部、福建北部、贵州北部和东部、广西北部、陕西西南部、甘肃东南部、云南西北部以及西藏东南部等地有大到暴雨，其中，江西北部、湖南东北部、四川盆地中部和北部等地局地有大暴雨(100～150毫米)。"
                    },
                    {
                        id: 56,
                        title: "明星写真",
                        img_url: require("../../images/portfolio-7.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    },
                    {
                        id: 57,
                        title: "摄影器材",
                        img_url: require("../../images/portfolio-8.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    },
                    {
                        id: 58,
                        title: "古典美女",
                        img_url: require("../../images/portfolio-9.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    },
                    {
                        id: 59,
                        title: "精品美女",
                        img_url: require("../../images/post-7-800x394.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    },
                    {
                        id: 60,
                        title: "清纯美女",
                        img_url: require("../../images/post-8-800x394.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    },
                    {
                        id: 61,
                        title: "摄影器材",
                        img_url: require("../../images/post-9-800x394.jpg"),
                        zhaiyao: "【快舟十一号运载火箭首飞失利】10日12时17分，我国在酒泉卫星发射中心组织实施快舟十一号运载火箭首次飞行任务，火箭飞行出现异常，发射任务失利。具体原因正在进一步分析排查。（环球时报）"
                    }
                ]
            }
        },

        created() {
            // this.getAllCate();
            // 默认进入页面，显示全部图片
            // this.getPhotoListByCateId(0);
        },

        mounted() { // 当组件中的 DOM 结构被渲染好并放到页面中去，会执行这个钩子函数
            // 如果要操作元素了，最好在 mounted 里面，因为这个时候的 DOM 元素是最新的，而且在这里面你还可以获取对应的元素，
            // 如果过早初始化，那个时候页面还没渲染好，里面也没有对应的元素，那样初始化毫无意义
            // 初始化滑动控件(使用之后要看下我们上面的组件有没有对应的类mui-scroll-wrapper)
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            // getAllCate(){
            //     // url:/api/getimgcategory
            //     this.$http.get('api/getimgcategory').then(function (result) {
            //         if(result.body.status === 0){
            //            // 手动拼接出一个最完整的分类列表，利用unshift添加到最前面
            //             var ctg = {title:"全部",id:0};
            //             result.body.message.unshift(ctg);
            //             this.cates = result.body.message;
            //         }
            //     })
            // },

            // 这个方法要调用两次，第一次页面刚进来的时候，默认显示全部，要调用一次，然后点击分类列表的时候，每点击一次都要根据点击的id调用一次
            getPhotoListByCateId(cateid) {
                // 根据分类列表 id 获取图片列表 url: /api/getimages/:cateid 返回的json 数据有 id title img_url zhaiyao
                // cateid 调用的时候传过来的分类列表 id
                // this.$http.get('api/getimages/'+cateid).then(result => {
                //     if (result.body.status === 0){
                //         // 存起来所有图片，直接把图片放在list里面
                //         this.list = result.body.message;
                //     }
                // })
            }
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0px;
    }

    .photo-list li {
        background-color: #cccccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999999;
        position: relative;
    }

    .photo-list li img {
        vertical-align: middle;
        width: 100%;
    }

    .photo-list li img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        max-height: 84px;
    }

    .info-title {
        font-size: 14px;
    }

    .info-body {
        font-size: 13px;
    }

</style>