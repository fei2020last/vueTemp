/**
 * Created by admin on 2020/7/31.
 */
import { GlobalDatas } from './GlobalDatas'
// import router from './../router'
import axios from 'axios'
// import store from '../vuex/store'

// import qs from 'qs'
// import { HSoftLoading } from './../components/HsoftLoading.js'

import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { FBase64Encode, FBase64Decode } from './FBase64'
// 方法一：将对象序列化，多个对象之间用&拼接
// qs.stringify()	转换成查询字符串
// let comments = {content: this.inp  utValue}
// let comValue = qs.stringify(comments)
// 方法二：将序列化的内容拆分成一个个单一的对象
// qs.parse() 转换成json对象
// let comValue = qs.parse(comments)
var requset = axios.create()
let cancel,
  promiseArr = {}

const CancelToken = axios.CancelToken

// 响应时间
requset.defaults.timeout = 20000
// 配置cookie
requset.defaults.withCredentials = true
// 配置请求头（根据协议定）
requset.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 配置接口地址
requset.defaults.baseURL = GlobalDatas.baseAxisUrl

// POST传参序列化(添加请求拦截器)
requset.interceptors.request.use(
  (config) => {
    //发起请求时，取消掉当前正在进行的相同请求
    // if (promiseArr[config.url]) {
    //   promiseArr[config.url]('操作取消')
    //   promiseArr[config.url] = cancel
    // } else {
    //   promiseArr[config.url] = cancel
    // }
    // HSoftLoading.show()

    /*参数 根据后台协议定*/
    // config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = {...config.params};

    /*token放到header中*/
    // const token = store.state.userModule.userInfo.token ? store.state.userModule.userInfo.token : null;

    if (window.sessionStorage.getItem('userInfo_soft')) {
      var str = window.sessionStorage.getItem('userInfo_soft')
      var user = JSON.parse(str)
      const token = user ? user.token : null
      token && (config.headers.Authorization = token)
    }
    console.log('===请求前===', config)
    return config
  },
  (err) => {
    // HSoftLoading.hide()
    Message({
      message: err,
      type: 'warning'
    })
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
requset.interceptors.response.use(
  (res) => {
    console.log('====请求后====', res)
    // HSoftLoading.hide()
    //这里根据后端提供的数据进行对应的处理
    var netData = res
    if (netData.status === GlobalDatas.netSuccess02) {
      if (GlobalDatas.isUseFBase64) {
        netData = FBase64Decode(netData)
      }
      return Promise.resolve(netData)
    } else {
      Message({
        message: netData,
        type: 'warning'
      })
      return Promise.resolve(false)
    }
  },
  (error) => {
    // HSoftLoading.hide()
    console.log(error)
    return Promise.resolve(false)
  }
)
// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    // var token = store.state.userModule.userInfo ? store.state.userModule.userInfo.token : null
    // if (!token) {
    //   router.replace('/')
    //   reject('连接到服务器失败')
    //   return
    // }
    var netParams = params
    if (GlobalDatas.isUseFBase64) {
      netParams = FBase64Encode(JSON.stringify(netParams))
    }
    requset
      .post(url, netParams, {
        cancelToken: new CancelToken((c) => {
          cancel = c
        })
      })
      .then(
        (res) => {
          resolve(res.data)
        },
        (err) => {
          reject(err.data)
        }
      )
      .catch((err) => {
        reject(err)
      })
  })
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    requset
      .get(
        url,
        { params: params },
        {
          cancelToken: new CancelToken((c) => {
            cancel = c
          })
        }
      )
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
