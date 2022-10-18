<template>
  <div>
    
    <div class="advert-container">
     <div class="advert-main">
        <div class="advert-select">
          <div :class="isTable ?'checked' : ''" @click="change('T')">列表显示</div>
          <div :class="isTable ?'' : 'checked'" @click="change('C')">图表显示</div>
          <a-space size="large">
            <icon-refresh :style="{fontSize:'13px'}" />
          </a-space>
        </div>
       <div class="avert-table" v-show="isTable">
         <a-table :columns="columns" :data="data" :scroll="scroll" :bordered="false" :pagination="page" />
         <!-- <a-pagination :total="200" show-page-size/> -->
       </div>
       <div id="advert-echarts" v-show="!isTable">

       </div>
     </div>
    </div>
  </div>
</template>

<script>

import {
  IconRefresh
} from '@arco-design/web-vue/es/icon';
import { ref, reactive } from 'vue';
import * as echarts from 'echarts';

import { onMounted } from "vue";
export default {
  components: {
    IconRefresh,
  },
   setup() {
    let isTable = ref(true);
    let page = {
      total:200,
      showPageSize:true,
      pageItemStyle:{
        minWidth: "34px",
        height: "34px",
        fontSize: "15px",
        lineHeight: "34px",
        color: "#333333",
        background: "#F1F5F9",
        borderRadius: "6px",
        
      },
      activePageItemStyle:{
        background: "#2563EB",
        color: "#FFFFFF",
        borderRadius: "6px"
      },
      bufferSize:1

    }
    onMounted(() => { //需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.getElementById("advert-echarts"));
      // 绘制图表
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {//自适应大小
        myChart.resize();
      };
    });


    const scroll = {
      // x: 2000,
      y: 536
    };
    
    const columns = [
      {
        title: '时间段',
        dataIndex: 'timeQuantum',
        width: 300
      },
      {
        title: '消耗(元)',
        dataIndex: 'consume',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
    ];
    const data = reactive([{
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com'

    }, {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com'
    }, {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com'
    },]);
    let change = function(condition) {
      if (condition === 'T'){
        isTable.value = true;
      } else {
        isTable.value = false;
      }
    }
    return {
      scroll,
      columns,
      data,
      isTable,
      page,
      change,
    }
  },
}
</script>

<style lang="less" scoped>
.advert-container{
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  position: absolute;
  left: 222px;
  top: 0px;
  width: 1314px;
  box-sizing: border-box;
  .advert-main{
    width: 1212px;
    height: 621px;
    background: #FFFFFF;
    border-radius: 2px;
    margin: 95px 51px 0;
    box-sizing: border-box;
    padding: 17px 26px;
    // 选项课选择区域
    .advert-select{
      width: 100%;
      height: 51px;
      .checked{
        background: #F1F5F9;
      }
      div:nth-child(-n + 2){
        width: 85px;
        height: 34px;
        
        cursor:pointer;
        border-radius: 4px;
        line-height: 34px;
        font-size: 15px;
        float:left;
      }
      div:first-child{
        margin-right: 30px;
      }
      div:last-child{
        width: 34px;
        height: 34px;
        background: #F1F5F9;
        float: right;
        line-height: 34px;
        text-align: center;
        /deep/ .arco-space-item{
          width: 34px;
        }
      }
    }
    .arco-table{
      line-height: 58px;
      height: 536px;
      // 滚动条样式
      /deep/.arco-table-body::-webkit-scrollbar{
          width: 6px;
          height: 6px;
          background-color: transparent;
      }
      /deep/.arco-table-body::-webkit-scrollbar-thumb {
        width: 4px;
        height: 20px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 2px;
      }
      /deep/.arco-table-tr {
        height: 58px;
        color: #475569;
        .arco-table-th{
          font-size: 15px;
        }
      }
      // 表头
      /deep/.arco-table-tr:first {
        color: #1E293B;
        font-weight: 500px;
      }
      // 分页位置
      /deep/.arco-table-pagination{
        position: absolute;
        bottom: 0;
        right: 0;
        line-height: 54px;
        
      }
      // 省略号
      /deep/.arco-pagination-item-ellipsis {
          background: #FFFFFF !important;
        }
    }
    #advert-echarts{
      width: 1160px;
      height: 536px;
    }
  }
}
</style>