/**
 * axios全局配置
 * TODO: 拦截器全局配置，根据实际情况修改
 */
import axios from 'axios'
import store from '../store'
import router from '../router'
import { Message } from 'element-ui'
import Cookies from 'js-cookie'
import { mapState, mapActions } from 'vuex'

//axios全局配置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8' //修改post请求的数据格式



const service = axios.create({
    timeout: 5000,   // 请求超时时
    /*baseURL:'http://127.0.0.1:8888/tmr_imap'   //请求的后台地址*/
});

// http request 拦截器
service.interceptors.request.use(
    config => {
        config.headers={
            'JSESSIONID':Cookies.get('token')
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
service.interceptors.response.use(
    response => {
        if (response.data.status==502){
            Message({
                message: `请求出错，用户已过期，请重新登录！`,
                type: 'error'
            })
        }
        return Promise.resolve(response.data)
    },
    error => {
       if (error.response) {
            switch (error.response.status) {
                case 404:
                    router.push('error/404');
                case 500:
                    router.push('error/404');
                default:
                    Message({
                        message: `请求出错！错误代码：${error.response.status}`,
                        type: 'error'
                    })
            }
            return Promise.reject(error.response.data)
        }
    }
);

export default service;
