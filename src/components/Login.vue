<template>
    <div>
        <div style="text-align:center;padding:40px">
            <img src="https://picsum.photos/200/200" alt=" " style="width:150px;height:150px;border-radius:50%;" />
    
            <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
            <!-- 行 -->
            <br>
            <div style="white-space:nowrap">
                <!-- 列 -->
                <div style="text-align:left;width:50%;display:inline-block;height:50px">
                    <span>免费注册</span>
                </div>
                <!-- 列 -->
                <div style="text-align:right;width:50%;display:inline-block;height:50px">
                    <span>忘记密码</span>
                </div>
            </div>
            <mt-button size="large" type="primary" @click="login">登录</mt-button>    
        </div>
    
    </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
export default {
    data() {
        return { uname: "", upwd: "" }
    },
    methods: {
        login() {
            this.$axios.post('user/login', { uname: this.uname, upwd: this.upwd }, { withCredentials: true }).then((result) => {
                if (result.data.code == 200) {
                    //登录成功，返回上一页
                    Toast({
                        message: '登录成功',
                        position: 'bottom',
                        duration: 2000
                    });
                    this.$router.back()
                } else {
                    //弹窗提示登录失败消息
                    MessageBox('提示', '操作成功');
                }
            })
        }
    }
}
</script>

