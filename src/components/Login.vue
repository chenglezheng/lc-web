<template>
  <div class="bg-account-pages" id="login">
    <!-- Login -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="wrapper-page">
              <div class="account-pages">
                <div class="account-box">
                  <!-- Logo box-->
                  <div class="account-logo-box">
                    <h2 class="text-uppercase text-center">
                      <a href="index.html" class="text-success">
                        <span><img src="../assets/images/logo_dark.png" alt="" height="28"></span>
                      </a>
                    </h2>
                  </div>
                  <div class="account-content">
                    <form @submit.prevent="userLogin">
                      <div class="form-group mb-3">
                        <label for="username" class="font-weight-medium">用户名</label>
                        <input class="form-control" type="text" id="username" required="" v-model="formObj.username"
                               placeholder="请输入用户名...">
                      </div>
                      <div class="form-group mb-3">
                        <a href="auth-recoverpassword.html" class="text-muted float-right">
                          <small>忘记密码?</small>
                        </a>
                        <label for="password" class="font-weight-medium">密 码</label>
                        <input class="form-control" type="password" required="" id="password" v-model="formObj.password"
                               placeholder="请输入密码...">
                      </div>
                      <div class="form-group mb-3">
                        <div class="checkbox checkbox-info">
                          <input id="remember" type="checkbox">
                          <label for="remember">
                            10天免密登录
                          </label>
                          <span class="alarm-message">{{msg}}</span>
                        </div>
                      </div>
                      <div class="form-group row text-center">
                        <div class="col-12">
                          <button class="btn btn-block btn-success waves-effect waves-light" type="submit">登 录
                          </button>
                        </div>
                      </div>
                    </form> <!-- end form -->
                    <div class="row mt-3">
                      <div class="col-12 text-center">
                        <p class="text-muted">还没有账户? <a  href="/404" class="text-dark m-l-5"><b>注 册</b></a></p>
                      </div>
                    </div> <!-- end row-->
                  </div> <!-- end account-content -->
                </div> <!-- end account-box -->
              </div>
              <!-- end account-page-->
            </div>
            <!-- end wrapper-page -->
          </div> <!-- end col -->
        </div> <!-- end row -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
import crypto from 'crypto'
export default {
  name: 'Login',
  data () {
    return {
      msg: '',
      formObj:{
			username:"",
			password:"",
		}
    }
  },
  methods: {
  	userLogin(){
        let pass = this.getMD5(this.formObj.password.trim() + this.formObj.username);
        var successCallback =  (response) => {
		      console.log(response.data)
      	}
      	var errorCallback =  (response) => {
          console.log('服务器请求出错了')
      	}
        this.$http.get('http://127.0.0.1/lc/select?userId=5').then(successCallback,errorCallback);
	},
	getMD5(pass){
     	let md5 = crypto.createHash("md5");
     	md5.update(pass);
     	return md5.digest('hex')
    }
 
 }
}
</script>


<style scoped>
.alarm-message{
	color:red;
	margin-left:38px;
}

</style>
