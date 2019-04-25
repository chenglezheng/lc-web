<template>
    <div class="sys-panel" :style="rule">
        <searchCondition></searchCondition>
        <tableContent></tableContent>
    </div>
</template>

<script>
import searchCondition from './searchCondition'
import tableContent from './tableContent'
export default {
    name: 'contentPanel',
    data() {
        return {
            rule:{
                height:'',
                width:'',
            }
         }
    },
    created(){
        window.addEventListener('resize', this.getPanelRule);
        this.getPanelRule()
    },
    destroyed(){
        window.addEventListener('resize', this.getPanelRule);
    },
    methods:{
        getPanelRule(){
            this.rule.height = window.innerHeight - 153 + 'px';
            this.rule.width = window.innerWidth - 400 + 'px';
        }
    },
    /*组件注册*/
    components:{
        searchCondition, tableContent
    }
 }
</script>
