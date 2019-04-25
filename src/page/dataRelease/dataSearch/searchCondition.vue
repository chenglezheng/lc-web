<template>
    <div class="data-search-condition">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="search-condition">
            <el-form-item label="时间方案：" prop="timeStyle">
                <el-radio-group v-model="ruleForm.timeStyle" @change="changeTimeStyle" >
                    <el-radio label="1">日</el-radio>
                    <el-radio label="2">月</el-radio>
                    <el-radio label="3">年</el-radio>
                    <el-radio label="4">时段</el-radio>
                </el-radio-group>
            </el-form-item>
            <!--日-->
            <el-form-item label="时间：" prop="currentTime"  :class="currentTimeDateObject">
                <el-date-picker v-model="ruleForm.currentTime"
                align="right" type="date" size="mini"  placeholder="选择日期"
                :picker-options="pickerCurrentTime">
                </el-date-picker>
            </el-form-item>
            <!--月-->
            <el-form-item label="时间："  prop="currentTimeMonth" :class="currentTimeMonthObject">
                <el-date-picker
                    v-model="ruleForm.currentTimeMonth"
                    type="month"
                    size="mini"
                    placeholder="选择月">
                </el-date-picker>
            </el-form-item>
            <!--年-->
            <el-form-item label="时间：" prop="currentTimeYear"  :class="currentTimeYearObject">
                <el-date-picker
                    v-model="ruleForm.currentTimeYear"
                    type="year"
                    size="mini"
                    placeholder="选择年">
                </el-date-picker>
            </el-form-item>
           <el-form-item label="时段："  prop="timeInterval" :class="timeIntervalObject">
               <el-date-picker
                   v-model="ruleForm.timeInterval"
                   type="daterange"
                   size="mini"
                   align="right"
                   unlink-panels
                   range-separator="至"
                   start-placeholder="开始日期"
                   end-placeholder="结束日期"
                   :picker-options="pickerOptionsTimeInterval">
               </el-date-picker>
            </el-form-item>
            <el-form-item label="主副表：" prop="meterType" :class="meterTypecomboboxObject">
                <el-select v-model="ruleForm.meterType" size="mini" placeholder="请选择">
                    <el-option
                        v-for="item in meterTypeSelect"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="电量类型：" prop="pulseType" :class="pulseTypecomboboxObject">
                <el-select v-model="ruleForm.pulseType" size="mini" placeholder="请选择">
                    <el-option
                        v-for="item in pulseTypeSelect"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item :class="searchButtonObject">
                <div :class="buttonDivObject"><el-button size="mini"  @click="submitForm('ruleForm')">查询</el-button></div>
                <div :class="buttonDivObject"><el-button   size="mini" @click="resetForm('ruleForm')">导出</el-button></div>
            </el-form-item>
            <el-form-item label="隐藏相同" prop="isDisplaySame"  :class="isDisplaySameObject">
                <el-switch v-model="ruleForm.isDisplaySame"></el-switch>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import index from "../../../store";
import bus from '../../../util/bus'
export default {
    name: 'searchCondition',
   data() {
        return {
                pickerCurrentTime: {
                    disabledDate(time) {
                            return time.getTime() > Date.now();
                        },
                        shortcuts: [{
                            text: '今天',
                            onClick(picker) {
                            picker.$emit('pick', new Date());
                    }
                    }, {
                            text: '昨天',
                                onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                picker.$emit('pick', date);
                            }
                        }, {
                            text: '一周前',
                                onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', date);
                            }
                        }]
                },
                pickerOptionsTimeInterval:{
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                }
                }, {
                        text: '最近一个月',
                            onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                            onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                ruleForm:{
                        currentTimeMonth:'',
                        currentTimeYear:'',
                        timeStyle:'1',
                        timeInterval:'',
                        meterType:'',
                        pulseType:''
                },
                currentTimeDateObject:{
                        currentTime:true,
                        displayNone:false,
                },
                currentTimeMonthObject:{
                    currentTime:true,
                    displayNone:true,
                },
                currentTimeYearObject:{
                        currentTime:true,
                        displayNone:true,
                },
                timeIntervalObject:{
                    timeInterval:true,
                    displayNone:true,
                },
                meterTypecomboboxObject:{
                        comboboxStyle:true,
                        meterTypecombobox:true
                },
                pulseTypecomboboxObject:{
                        comboboxStyle:true,
                        pulseTypecombobox:true
                },
                searchButtonObject:{
                    searchButtonStyle:true,
                },
                buttonDivObject:{
                    buttonDivStyle:true,
                },
                isDisplaySameObject:{
                    isDisplaySame:true
                },
                meterTypeSelect:[{
                    value: '0',
                    label: '主表'
                }, {
                    value: '1',
                    label: '副表'
                }],
                pulseTypeSelect:[{
                    value: '0',
                    label: '正向有功'
                }, {
                    value: '1',
                    label: '反向有功'
                }],
}
}
,
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid)=>
            {
                if (valid) {
                   // alert('submit!');
                    var bTime="";
                    var eTime="";
                    var pulseType=this.ruleForm.pulseType;
                    var meterType=this.ruleForm.meterType;
                    if(this.ruleForm.timeStyle == 1){
                        const current=new Date(this.ruleForm.currentTime);
                        var year=current.getFullYear();
                        var month=current.getMonth()+1;
                        var day=current.getDate();
                        bTime=year+"-"+((month<10)?("0"+month):month)+"-"+((day<10)?("0"+day):day)+" 00:00:00";
                        eTime=year+"-"+((month<10)?("0"+month):month)+"-"+((day<10)?("0"+day):day)+" 23:59:59";
                   //     console.log(bTime+","+eTime);
                    }else if(this.ruleForm.timeStyle == 2){
                        const current=new Date(this.ruleForm.currentTimeMonth);
                        var year=current.getFullYear();
                        var month=current.getMonth()+1;
                        var day = new Date(year,month,0);
                        bTime=year+"-"+((month<10)?("0"+month):month)+"-01 00:00:00";
                        eTime=year+"-"+((month<10)?("0"+month):month)+"-"+day.getDate()+" 23:59:59";
                      //  console.log(bTime+","+eTime);
                    }else if(this.ruleForm.timeStyle == 3){
                        const current=new Date(this.ruleForm.currentTimeYear);
                        var year=current.getFullYear();
                        bTime=year+"-01-01 00:00:00";
                        eTime=year+"-12-31 23:59:59";
                        //console.log(bTime+","+eTime);
                    }else if(this.ruleForm.timeStyle == 4){
                        const current=this.ruleForm.timeInterval+'';
                        var arr=current.split(',');
                        for(let i=0; i<arr.length; i++){
                            const current=new Date(arr[i]);
                            var year=current.getFullYear();
                            var month=current.getMonth()+1;
                            var day=current.getDate();
                            if(i==0){
                                bTime=year+"-"+((month<10)?("0"+month):month)+"-"+((day<10)?("0"+day):day)+" 00:00:00";
                            }
                            if(i==1){
                                eTime=year+"-"+((month<10)?("0"+month):month)+"-"+((day<10)?("0"+day):day)+" 23:59:59";
                            }
                        }
                       // console.log(bTime+","+eTime);
                    }
                  //  console.log(bTime+","+eTime);
                  //  console.log(meterType+","+pulseType);
                    this.loadTableData(bTime,eTime,meterType,pulseType);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            }
        )},
        loadTableData(bTime,eTime,meterType,pulseType){
            console.log("search........");
           //    console.log(bTime+","+eTime);
          //  console.log(meterType+","+pulseType);
            bus.$emit("tableContent",bTime,eTime,meterType,pulseType)
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        changeTimeStyle(){
            //console.log("timestyle="+this.ruleForm.timeStyle)
            if (this.ruleForm.timeStyle == 1) {
                this.currentTimeDateObject.displayNone = false;
                this.currentTimeMonthObject.displayNone = true;
                this.currentTimeYearObject.displayNone = true;
                this.timeIntervalObject.displayNone = true
            } else if (this.ruleForm.timeStyle == 2) {
                this.currentTimeDateObject.displayNone = true;
                this.currentTimeMonthObject.displayNone = false;
                this.currentTimeYearObject.displayNone = true;
                this.timeIntervalObject.displayNone = true
            } else if (this.ruleForm.timeStyle == 3) {
                this.currentTimeDateObject.displayNone = true;
                this.currentTimeMonthObject.displayNone = true;
                this.currentTimeYearObject.displayNone = false;
                this.timeIntervalObject.displayNone = true
            } else if (this.ruleForm.timeStyle == 4) {
                this.currentTimeDateObject.displayNone = true;
                this.currentTimeMonthObject.displayNone = true;
                this.currentTimeYearObject.displayNone = true;
                this.timeIntervalObject.displayNone = false
            }
        }
    }
}
</script>

<style>


</style>
