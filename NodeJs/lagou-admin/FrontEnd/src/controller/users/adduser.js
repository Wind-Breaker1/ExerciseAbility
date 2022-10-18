import userAddTpl from '../../views/users-signup.art'
import page from "../../databus/page";
import { userAdd } from '../../models/users-add';


export const addUser = () => {
  
  const html = userAddTpl();
  $('#users-list-box').after(html);
  const _save = async () => {
    //提交表单
    const data = $('#users-form').serialize();
    let result = await userAdd(data);
    if (result.ret) {
      page.setCurPage(1);
      // 观察者模式:告知list页面重新渲染
      $('body').trigger('addUser');
    }
    
    const btnClose = $('#users-close');
    btnClose.click();
  }
 
  
   // 点击保存提交表单
  $('#users-save').on('click', _save);
}