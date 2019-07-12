<template>
    <div>
        <mt-header :title="headerTitle"></mt-header>
        <mt-tab-container v-model="selected" :swipeable="true">
            <mt-tab-container-item id="home">
                <index></index>
            </mt-tab-container-item>
            <mt-tab-container-item id="cart">
                <cart></cart>
            </mt-tab-container-item>
            <mt-tab-container-item id="user">
                <usercenter></usercenter>
            </mt-tab-container-item>
            <mt-tab-container-item id="settings">
                <settings></settings>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                <font-awesome-icon slot="icon" icon="home" /> 首页
            </mt-tab-item>
            <mt-tab-item id="cart">
                <font-awesome-icon slot="icon" icon="shopping-cart" /> 购物车
            </mt-tab-item>
            <mt-tab-item id="user">
                <font-awesome-icon slot="icon" icon="user-cog" /> 个人
            </mt-tab-item>
            <mt-tab-item id="settings">
                <font-awesome-icon slot="icon" icon="cog" /> 设置
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
//
/**
 *针对vue的FontAwesome https://github.com/FortAwesome/vue-fontawesome
 需要先安装：
 * $ npm i --save @fortawesome/fontawesome-svg-core
   $ npm i --save @fortawesome/free-solid-svg-icons
   $ npm i --save @fortawesome/vue-fontawesome

然后到main.js设置
    import { library } from '@fortawesome/fontawesome-svg-core'
    
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    
    import { faHome } from '@fortawesome/free-solid-svg-icons'
    
    library.add(faHome)
    Vue.component('font-awesome-icon', FontAwesomeIcon)

 */
//到这里 https://fontawesome.com/icons查找要用到的icon图标
export default {
    data() {
        return {
            selected: 'home',
            headerTitle: "首页",
        }
    },
    methods: {},
    mounted() {
        this.$bus.$off('changeTab')
        this.$bus.$on('changeTab', (tab) => {
            this.selected = tab
        })
    },
    watch: {
        // 注意watch对应的监听处理函数不可以写成箭头函数
        selected: function() {
            if (this.selected == "home") {
                this.headerTitle = "首页"
            } else if (this.selected == 'cart') {
                this.headerTitle = "购物车"
            } else if (this.selected == 'user') {
                this.headerTitle = "用户"
            } else if (this.selected == 'settings') {
                this.headerTitle = "设置"
            }
        }
    }
};
</script>

<style>

</style>


