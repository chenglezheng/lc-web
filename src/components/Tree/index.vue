<template>
   <div class="sys-tree"  :style="height">
       <ul id="treeDemo" class="ztree"></ul>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Tree',
    data() {
    return {
        setting:{
            view: {
                selectedMulti: false,
            },
            async:{
                enable:true,
                url:"http://127.0.0.1:8888/tmr_imap/getMidModelNoFilterAcquiredsNoRoleSubstationTree",
                autoParam:["id","noteType"],
            },
            expandSpeed:"show",
            data: {
                simpleData: {
                    enable: true
                }
            },
            edit: {
                enable: false
            },
            callback: {
                onClick: this.zTreeOnClick,
            }
        },
         height:{
            height:'',
         }
        };
    },
    created(){
        window.addEventListener('resize', this.getTreeModeHeight);
        this.getTreeModeHeight();
        this.menu();
    },
    destroyed(){
            window.addEventListener('resize', this.getTreeModeHeight);
    },
    methods:{
            /*handleNodeClick(data){
                console.log(data);
            },*/
            ...mapActions({
                getTree: 'auth/getTree',
            }),
            menu(){
                this.getTree().then(res => {
                    $.fn.zTree.init($("#treeDemo"), this.setting,res);
                })
            },
            zTreeOnClick(event, treeId, treeNode) {//触发点击后面节点问题
                console.log(treeNode.id);
                console.log(treeNode.name);
            },
            getTreeModeHeight(){
                this.height.height = window.innerHeight - 140 + 'px';
            },
    }
}
</script>
