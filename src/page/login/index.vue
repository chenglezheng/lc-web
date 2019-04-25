<template>
    <div class="sys-login">
        <div class="login-area">
            <div class="logo">
                <!-- <img src="~sysStatic/images/logo.png" alt=""> -->
            </div>
            <div class="form-group">
                <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px">
                    <el-form-item prop="name" >
                        <el-input class="userInput" auto-complete="off" v-model="loginForm.name" type="text" :placeholder="$t('global.username')">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="passInput" auto-complete="off" v-model="loginForm.password" type="password" :placeholder="$t('global.password')"></el-input>
                    </el-form-item>
                    <div v-if="sysMsg" class="err-msg">{{sysMsg}}</div>
                    <a class="btn-login" type="primary" @click="submitForm()">{{$t('global.login')}}</a>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
    data() {
        return {
            loginForm: {
                name: '',
                password: '',
            },
            loginRules: {
                name: [
                    {required: true, message: '用户名不能为空'}
                ],
                password :[
                    {required: true, message: '密码不能为空'}
                ]
            },
            sysMsg: ''
        }
    },
    methods: {
        ...mapActions({
            login: 'auth/loginByUserAndPassword',
            loadLang: 'loadLang'
        }),
        submitForm(){
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.login({
                        username: this.loginForm.name,
                        password: this.loginForm.password
                    }).then(res => {
                        if(res.login){
                            this.$router.push('home')
                        } else {
                            this.sysMsg = res.message
                        }
                    })
                } else {
                    return false
                }
            });
        }
    }
}
</script>
