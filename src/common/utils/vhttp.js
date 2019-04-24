/**
 * Created by Echonessy on 2019/4/23.
 */
import request from '../../api/config'
import Vue from 'vue';


export const post = (url,data,success) => {
  return request({
    url: url,
    method: 'post',
    data: data
  }).then((response) =>{
    let res = response.data.response;
    if(res.responseHeader.code == '200' ) {
      success(response.data.response.responseBody)
    } else{
      console.log('请求异常>>>>',url)
      Vue.mint.toast('请求异常');
    }
  }).catch(function (error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response);
      Vue.mint.toast(error.response.status+' : '+error.response.statusText);
    } else {
      console.log('Error', error.message);
      Vue.mint.toast(error.message);
    }
  });
}

export const get = (url,data,success) => {
  return request({
    url: url,
    method: 'get',
    params: data
  }).then((response) =>{
    let res = response.data.response;
    if(res.responseHeader.code == '200' ) {
      success(response.data.response.responseBody)
    } else{
      console.log('请求异常>>>>',url)
      Vue.mint.toast('请求异常');
    }
  }).catch(function (error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response);
      Vue.mint.toast(error.response.status+' : '+error.response.statusText);
    } else {
      console.log('Error', error.message);
      Vue.mint.toast(error.message);
    }
  });
}

export default Vue => {
  const obj = {
    post: post,
    get: get,
  };
  Vue.vhttp = obj;
  Vue.prototype.$vhttp = obj;
}
