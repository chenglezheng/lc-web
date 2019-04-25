var data = [
    {
        name: '数据融合',
        child: [
            {
                name: '介绍',
                path: '/home'
            },
            {
                name: '功能类',
                path: '/home'
            },
        ]
    },
    {
        name: 'KPI融合',
        child: [
            {
                name: '介绍',
                path: '/components'
            },
            {
                name: '功能类',
                path: '/components'
            },
        ]
    },
    {
        name: '档案融合',
        child: [
            {
                path: '/example/table',
                name: '列表页面',
                permission: ['edit']
            },
            {
                path: '/example/charts',
                name: '图表页面'
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    },
    {
        name: '公式融合',
        child: [
            {
                name: '介绍',
                path: '/home'
            },
            {
                name: '功能类',
                path: '/home'
            },
        ]
    },
    {
        name: '运维工作站',
        child: [
            {
                path: '/example/table',
                name: '列表页面',
                permission: ['edit']
            },
            {
                path: '/example/charts',
                name: '图表页面'
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    },
    {
        name: '数据发布',
        child: [
            {
                path: '/dataRelease/dataSearch',
                name: '电量查询',
                permission: ['edit']
            },
            {
                path: '/example/charts',
                name: '图表页面'
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    },
    {
        path: '/theme',
        name: '系统管理',
        child: [
            {
                path: '/example/table',
                name: '列表页面',
                permission: ['edit']
            },
            {
                path: '/example/charts',
                name: '图表页面'
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    }
];

export default [{
    path: '/menu/menuList',
    data: data
}]
