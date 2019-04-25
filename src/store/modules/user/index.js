import Cookies from 'js-cookie'

const state = {
    // 用户名
    name: ''
}

const mutations = {
    setName: (state, data) => {
        if(data){
            Cookies.set('userName', encodeURIComponent(data),60*60*30)
        } else {
            Cookies.remove('userName')
        }
        state.name = data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
