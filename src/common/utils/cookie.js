/**
 * Created by Echonessy on 2019/4/11.
 */
import Cookies from 'js-cookie'

// 非get方法需要domain设置
const neededAttributes = {
  expires: 365,
  // domain: 'Echonessy',
  path: '/'
};

export const get =  (key) => {
  return Cookies.get(key) && decodeURI(Cookies.get(key))
};

export const set =  (key, val, options = neededAttributes) => {
  Cookies.set(key, encodeURI(val), options)
};

export const del =  (key, options = neededAttributes) => {
  Cookies.remove(key, options)
};

export const all =  () => {
  return Cookies.get()
};

export const empty =  (options = neededAttributes) => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName, options)
  })
};

export default Vue => {
  const cookie = {get, set, del, all, empty};
  Vue.cookie = cookie;
  Vue.prototype.$cookie = cookie
}
