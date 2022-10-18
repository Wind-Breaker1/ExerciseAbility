import positionUpdateTpl from '../../views/positions-update.art';
import http from "../../utils/http";
import { positionUpdate } from '../../models/position-update';
import positionUpdateInfo from '../../views/positions-update-form.art'
export const updatePosition = () => {
  $('#positions-list-box').after(positionUpdateTpl())

  // 点击保存提交表单
  $('#positions-save-update').on('click', async () => {
    try {
      const data = $('#position-form-update').serialize();
      let result = await positionUpdate(data);
      if (result.ret) {
        // page.setCurPage(1);
        // 观察者模式:告知list页面重新渲染
        $('body').trigger('addUser');
      }
      const btnClose = $('#positions-close-update');
      btnClose.click();
      
    } catch (err) {
      console.log(err);
    }
    //提交表单
  })
}
export const fillPositionsUpdateTpl = async (id) => {
  let { result } = await http({
    url: '/api/positions/listone',
    type: 'post',
    data: {
      id
    }
  })
  console.log(result)
  $('#position-form-update').html(positionUpdateInfo({
    data: {
      ...result.data
    }
  }))
  console.log(1111)
}
// 添加用户
// export const addPosition = () => {
//   $('#positions-list-box').after(positionAddTpl())

//   // 提交表单
//   const _save = async () => {
//     try {
//       let result = await positionsAdd()

//       if (result.ret) {
//         // 添加数据后渲染
//         page.setCurPage(1)
//         // 告知list页面要重新渲染
//         $('body').trigger('addPosition')
//       }

//       // 单击关闭模态框
//       $('#positions-close').click()
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   // 点击保存，提交表单
//   $('#positions-save').off('click').on('click', _save)
// }
