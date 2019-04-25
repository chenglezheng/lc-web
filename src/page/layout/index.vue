<template>
    <div class="wrapper">
        <template v-if="layout =='left'">
            <header-bar v-once>
                <div slot="logo" style="padding:28px 10px">
                    <img src="~sysStatic/images/default/logo.png" width="400px">
                </div>
            </header-bar>
            <nav-bar :layout="layout"></nav-bar>
        </template>
        <template v-if="layout == 'top'">
            <header-bar>
                <div slot="logo" style="padding:28px 10px">
                    <img src="~sysStatic/images/default/logo.png" width="400px">
                </div>
                <template slot="topnav">
                    <nav-bar :layout="layout"></nav-bar>
                </template>
            </header-bar>
        </template>
        <div class="sys-content" :class="layout">
            <tag-nav></tag-nav>
            <keep-alive :include="tagNavList">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import NavBar from './NavBar'
import TagNav from './TagNav'

export default {
    computed: {
        layout(){
            return this.$store.state.navbarPosition
        },
        tagNavList(){
            return this.$store.state.tagNav.cachedPageName
        }
    },
    components:{
        HeaderBar,
        NavBar,
        TagNav
    }
}
</script>