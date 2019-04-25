import Mock from 'mockjs'
import navlist from './navlist'
import login from './login'
import echarts from './echarts'
import table from './table'
import groupList from './groupList'
import getToken from './getToken'
import treeRoot from './treeRoot'
import treeSonArea from './treeSonArea'

let data = [].concat(navlist, login, echarts, table, groupList, getToken,treeRoot,treeSonArea)

data.forEach(function(res){
    Mock.mock(res.path, res.data)
})

export default Mock
