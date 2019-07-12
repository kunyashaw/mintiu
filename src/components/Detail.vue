<template>
    <div>
        <mt-header fixed title="详情">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <!-- 轮播图 -->
        <mt-swipe :auto="1000" style="height:400px" v-if="details.picList">
            <mt-swipe-item v-for="(tmp,i) in details.picList" :key="i">
                <img :src="'http://localhost:3000/'+tmp.md" alt style="height:400px" />
            </mt-swipe-item>
        </mt-swipe>
        <!-- 商品详情信息 -->
        <h3>{{details.title}}</h3>
        <h3 style="color:red">{{details.subtitle}}</h3>
        <h3 style="color:red">{{"￥"+details.price}}</h3>
        <!-- 自定义布局构成的页脚 -->
        <mt-tabbar fixed>
            <mt-tab-item id="收藏">
                <mt-button size="large">
                    <font-awesome-icon slot="icon" icon="bookmark" />
                </mt-button>
            </mt-tab-item>
            <mt-tab-item id="购物车">
                <mt-button size="large" @click="jumpToCart">
                    <font-awesome-icon slot="icon" icon="shopping-cart" />
                </mt-button>
    
            </mt-tab-item>
            <mt-tab-item id="喜欢">
                <mt-button size="large">
                    <font-awesome-icon slot="icon" icon="heart" />
                </mt-button>
    
            </mt-tab-item>
            <mt-tab-item id="添加购物车">
                <mt-button size="large" type="danger" @click="addToCart">加入购物车</mt-button>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return { details: [] };
    },
    methods: {
        jumpToCart() {
            // this.$router.push('cart')
            // 让底部的第二个tab被选中
            this.$store.commit('updateSelectedTab', 'cart')

            this.$router.replace('/', () => {
                console.log('replace成功了！！！')
                setTimeout(() => {
                    this.$bus.$emit('changeTab', 'cart')
                }, 100)

            })
        },
        addToCart() {
            var lid = this.$route.query.id;
            this.$axios.get('cart/add?buyCount=1&lid=' + lid, { withCredentials: true }).then((result) => {
                if (result.data.code == 200) {
                    //添加成功
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon icon-success'
                    });
                } else if (result.data.code == 300) {
                    //未登录,跳转到登录页面
                    this.$router.push('/login')
                }
            })
        }
    },
    mounted() {
        var lid = this.$route.query.id;
        this.$axios.get("product/detail?lid=" + lid).then(response => {
            this.details = response.data.details;
            console.log(this.details.picList);
        });
    }
};
</script>

