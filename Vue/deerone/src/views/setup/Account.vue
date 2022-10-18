<template>
  <div>
 
    <div class="acount-container">
      <TextTip Text="广告账户" :isShowBtn="true"/>
      <!-- <AccountSelect/> -->
      <div class="account-main">
        <a-table :columns="columns" :data="data" :bordered="false" :pagination="false" :scroll="scroll"
        row-class="account-tr"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import AccountSelect from '@/components/Select.vue'
import TextTip from '@/components/TextTip.vue'
export default {
  components:{
    AccountSelect,
    TextTip
  },
setup() {
  let color = 'red';
   const scroll = {
      
      y: 300
    };
    const columns = [
      {
        title: '账户ID',
        dataIndex: 'ID',
        ellipsis: true,
        cellStyle: {
          color: color
        }
      },
      {
        title: '登录密码',
        dataIndex: 'pass',
      },
      {
        title: '状态',
        dataIndex: 'statu',
        ellipsis: true,
      },
      {
        title: 'cookie',
        dataIndex: 'cookie',
      },
    ];
    const data = reactive([{
      key: '1',
      ID: 'Jane Doe',
      pass: '***',
      statu: '正常',
      cookie: 'jane.doe@example.com'
    },{
      key: '2',
      ID: 'Jane Doe',
      pass: '***',
      statu: '异常',
      cookie: 'jane.doe@example.com'
    }]);

    return {
      scroll,
      columns,
      data
    }
  },
}
</script>

<style lang="less" scoped>
// 容器
.acount-container{
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  position: absolute;
  left: 222px;
  top: 0px;
  width: 1314px;
  padding:0 51px;
  box-sizing: border-box;
  //用户列表主体
  .account-main{
    width: 1212px;
    height: 574px;
    background: #FFFFFF;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 21px 26px;
    // 表格
    .arco-table{
      line-height: 58px;
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
    }
  }
}
// 正常样式
.nomal{
  color: #52C41A;
}
// 异常
.abnomal{
  color: #F5222D;
}
</style>