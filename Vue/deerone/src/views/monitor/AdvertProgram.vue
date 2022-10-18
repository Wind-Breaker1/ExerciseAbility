<template>
  <div>
    <div class="advert-container">
    <Select width="1212px" Text="广告账户" Placeholder="选择账户" :IsShowBtn="false"/>  
     <div class="advert-main">
        <div class="advert-select">
          <div>
            <icon-refresh :style="{fontSize:'13px'}" />
          </div>
        </div>
       <div class="avert-table">
          <a-table :columns="columns" :data="data"  :bordered="false" :pagination="page">
              <template #optional="{ record }">
                <a-button @click="$modal.info({ title:'Name', content:record.name })">view</a-button>
              </template>
          </a-table>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import {IconRefresh} from '@arco-design/web-vue/es/icon';
import Select from '@/components/Select.vue'
export default {
  components: {
    Select,
    IconRefresh
  },
  setup() {
    const alignLeft = ref(false);
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
   const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Salary',
      dataIndex: 'salary',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: 'Email',
      dataIndex: 'email',
    }, {
      title: 'Optional',
      slotName: 'optional'
    }];
    const data = [{
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
    }, {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com'
    }, {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com'
    }];

    const handleChange = (data, extra) => {
      console.log('change', data, extra)
    }

    return {
      alignLeft,
      columns,
      data,
      page,
      handleChange
    }
  }
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
  padding: 0 51px;
  .advert-main{
    width: 1212px;
    height: 621px;
    background: #FFFFFF;
    border-radius: 2px;
    // margin: 0 51px ;
    box-sizing: border-box;
    padding: 17px 26px;
    // 选项课选择区域
    .advert-select{
      width: 100%;
      height: 51px;
      
      
      div{
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
  }
}
</style>