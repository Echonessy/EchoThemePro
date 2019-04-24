/**
 * Created by Echonessy on 2019/4/23.
 * 中央事件总线，作为兄弟组件之间通讯使用
 */
import Vue from 'vue'

export const Bus = new Vue()

export default Vue => {
  const bus = Bus;
  Vue.bus = bus;
  Vue.prototype.$bus = bus
}
