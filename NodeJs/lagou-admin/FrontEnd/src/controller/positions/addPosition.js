import positionAddTpl from '../../views/positions-add.art';
import page from "../../databus/page";
import { positionAdd } from '../../models/position-add';

export const addPosition = () => {
  $('#positions-list-box').after(positionAddTpl())

  // 点击保存提交表单
  $('#positions-save').on('click', async() => {
    //提交表单
    const data = $('#position-form').serialize();

    let result = await positionAdd(data);
    if (result.ret) {
      page.setCurPage(1);
      // 观察者模式:告知list页面重新渲染
      $('body').trigger('addUser');
    }
    const btnClose = $('#positions-close');
    btnClose.click();
  })
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
