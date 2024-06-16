import axios from 'axios'
import { jsonp } from 'vue-jsonp'

const baseURL = "http://192.168.0.1/";
axios.defaults.timeout = 1000 * 10;
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  /**
   * 获取数据公用方法
   */
  _getData: function (options) {
    if (options.method === "GET") {
      return axios.get(baseURL + options.url, {params: options.params})
    }
    return axios.post(baseURL + options.url, options.params,{ headers: options.headers })
  },
  /**
   * 获取状态数据
   */
  getStatusData: function (params) {
    let options = {
      method: 'GET',
      url: 'goform/goform_get_cmd_process',
      params
    };
    return this._getData(options);
  },
  /**
  * 获取频段数据
  */
  getLteBand: function (params) {
    let options = {
      method: 'GET',
      url: 'goform/goform_get_cmd_process',
      params
    };
    return this._getData(options);
  },
  /**
   * 登录
   */
  loginSys: function () {
    const params = new URLSearchParams()
    params.append('goformId', 'LOGIN')
    params.append('password', 'YWRtaW4=')
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    let options = {
      method: 'post',
      url: 'goform/goform_set_cmd_process',
      params,
      headers
    };
    return this._getData(options);
  }
}