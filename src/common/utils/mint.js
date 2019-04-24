/**
 * Created by Echonessy on 2019/4/15.
 */
import {Toast, MessageBox, Swipe, SwipeItem} from 'mint-ui';

export const toast = (msg) => {
  Toast({message: msg, position: 'bottom',});
}

export const tip = (msg, flag) => {
  if (!flag) {
    flag = 'icon-success';
  }
  else {
    if (flag == 'success') {
      flag = 'icon-success';
    } else {
      flag = 'icon-fail';
    }
  }
  Toast({message: msg, iconClass: flag});
}

export const confirm = (msg, fun) => {
  if (!msg ||msg == '') msg = '操作成功';
  MessageBox.confirm(msg).then(action => {
    if (fun) fun()
  });
}

export const alert = (msg, fun) => {
  if (!msg ||msg == '') msg = '操作成功';
  MessageBox.alert(msg).then(action => {
    if (fun) fun()
  });
}

export const prompt = (msg,fun) => {
  if (!msg ||msg == '') msg = '请输入';
  MessageBox.prompt(msg).then(({ value, action }) => {
   if (fun) fun()
  });
}

export default Vue => {
  const obj = {
    toast: toast,
    tip: tip,
    confirm: confirm,
    alert: alert,
    prompt: prompt,
  };
  Vue.mint = obj;
  Vue.prototype.$mint = obj;

}
