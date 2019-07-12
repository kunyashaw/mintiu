<template>
    <div>
        <h1>这是购物车</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {cartList:[]}
    },
    methods:{
        getCartList:function(){
            this.$axios.get('cart/list',{withCredentials:true}).then((result)=>{
                console.log(result.data)
                if(result.data.code == 300){
                    //跳转到登录界面
                    this.$router.push('/login')
                }else if(result.data.code == 200){
                    this.cartList = result.data.data
                }
            })
        }
    },
    mounted(){
        this.getCartList()
    }
}
</script>

