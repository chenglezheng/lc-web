import Cookies from 'js-cookie'
import axios from '@/util/ajax'
import Auth from '@/util/auth'
import { Message } from 'element-ui'
import router from '../../../router'

const state = {
    navList: []
}

const mutations = {
    setNavList: (state, data) => {
        state.navList = data
    },

    setToken: (state, data) => {
        if(data){
            Auth.setToken(data)
            Auth.setLoginStatus()
        } else {
            Auth.removeToken()
            Auth.removeLoginStatus()
        }
        state.token = data
    }
}

const actions = {
    // 用户登录
    loginByUserAndPassword({ commit }, userInfo) {
        return new Promise((resolve) => {
            axios({
                url: '/user/login',
                method: 'post',
                data: {
                    ...userInfo
                }
            }).then(res => {
                if(res.login){
                    commit('setToken', res.token)
                    commit('user/setName', res.name, { root: true })
                }
                resolve(res)
            })
        });
    },

    // 登出
    logout({commit}) {
        return new Promise((resolve) => {
            commit('setToken', '')
            commit('user/setName', '', { root: true })
            commit('tagNav/removeTagNav', '', {root: true})
            resolve()
        })
    },

    // 重新获取用户信息及Token
    // TODO: 这里不需要提供用户名和密码，实际中请根据接口自行修改
    relogin({dispatch, commit, state}){
        return new Promise((resolve) => {
            // 根据Token进行重新登录
            let userName = Cookies.get('userName')
            axios({
                url: 'http://127.0.0.1:8888/tmr_imap/user/getRequest',
                methods: 'get',
                data: {}
            }).then((res) => {
                if(res.status==502){
                    commit('setToken', '')
                    commit('user/setName', '', { root: true })
                    commit('tagNav/removeTagNav', '', {root: true})
                    router.push('login');
                }
            })
            // 刷新/关闭浏览器再进入时获取用户名
            commit('user/setName', decodeURIComponent(userName), { root: true })
            resolve()
        })
    },

    // 获取该用户的菜单列表
    getNavList({commit}){
        return new Promise((resolve) =>{
            axios({
                url: '/menu/menuList',
                methods: 'post',
                data: {}
            }).then((res) => {
                commit("setNavList", res)
                resolve(res)
            })
        })
    },

    // 将菜单列表扁平化形成权限列表
    getPermissionList({state}){
        return new Promise((resolve) =>{
            let permissionList = []
            // 将菜单数据扁平化为一级
            function flatNavList(arr){
                for(let v of arr){
                    if(v.child && v.child.length){
                        flatNavList(v.child)
                    } else{
                        permissionList.push(v)
                    }
                }
            }
            flatNavList(state.navList)
            resolve(permissionList)
        })
    },

    // 获取树模型数据
    getTree({commit}){
        return new Promise((resolve) =>{
            axios({
                url: 'http://127.0.0.1:8888/tmr_imap/getNoRoleRootTree',
                methods: 'post',
                data: {}
            }).then((res) => {
                resolve(res)
            })
        })
    },

    // 获取表格数据
    getTableData1({commit}){
        return new Promise((resolve) =>{
            axios({
                url: '/table/tableData1',
                methods: 'post',
                data: {}
            }).then((res) => {
                resolve(res)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
