<template>
    <div class="data-search-table">
        <el-table
            :data="tableData"
            size="mini"
            stripe :style="rule" :class="tableObject">
            <el-table-column
                prop="hour"
                label="时间"
                width="80"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line1"
                label="1号线"
                width="80"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line1high"
                label="1号主变高压侧"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line1middle"
                label="1号主变中压侧"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line1low"
                label="1号主变低压侧"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line2high"
                label="2号主变高压侧"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line2middle"
                label="2号主变中压侧"
                align="center">
            </el-table-column>
            <el-table-column
                prop="line2low"
                label="2号主变低压侧"
                align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.status=== 1">{{tableData[7].line2low}}</span>
                    <span v-else style="color: red">{{tableData[7].line2low}}</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination :class="pageObject"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import bus from '../../../util/bus'
export default {
    name: 'tableContent',
   data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize:10,
            totalCount:0,
            url:'/tableData',
            rule:{
                height:'',
                width:'',
            },
            tableObject:{
                tableCommonStyle:true
            },
            pageObject:{
                pageCommonStyle:true
            }
        };
    },
    methods:{
        ...mapActions({
            getTableData1: 'auth/getTableData1',
        }),
        loadData:function(condition,pageNum,pageSize){
            console.log("load........."+pageNum+","+pageSize);
            this.getTableData1().then(res => {
                var mydata=res;
                this.tableData=mydata.body;
                this.tableData =this.tableData.slice((pageNum-1)*pageSize,pageNum*pageSize);
                this.totalCount = mydata.total;
               // console.log("table="+this.totalCount);
               // console.log("table="+this.tableData[0].hour);
            });

        },
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.loadData(this.criteria, this.currentPage, this.pageSize);
        },
        handleCurrentChange(val){
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.loadData(this.criteria, this.currentPage, this.pageSize);
        },
        getTableRule(){
            this.rule.width = window.innerWidth - 480 + 'px';
            if ((window.innerWidth - 480) < 960) {
                this.rule.height = window.innerHeight - 312 + 'px';
            } else {
                this.rule.height = window.innerHeight - 275 + 'px';
            }
        }
    },
    created(){
        window.addEventListener('resize', this.getTableRule);
        this.getTableRule();
        this.totalCount=this.tableData.length;
        //this.loadData(this.criteria, this.currentPage, this.pageSize);
    },
    destroyed(){
        window.addEventListener('resize', this.getTableRule);
    },
    mounted(){
        var that=this;
        bus.$on('tableContent', function (bTime,eTime,meterType,pulseType) {
            console.log("condition........");
           // console.log(bTime+","+eTime);
           // console.log(meterType+","+pulseType);
           // console.log("bus:"+that.totalCount);
            that.loadData(that.criteria, that.currentPage, that.pageSize);
        })
    }
}
</script>

<style>


</style>
