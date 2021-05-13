import axios from 'axios'
import router from '../router'
import store from '../store'
import { GlobalDatas } from '../utils/GlobalDatas'

// 配置API接口地址
var instance = axios.create({
  baseURL: GlobalDatas.baseAxisUrl,
  withCredentials: true,
  timeout: 20000
})

console.log("请求地址",GlobalDatas.baseAxisUrl);

// http request 拦截器
instance.interceptors.request.use(
  (config) => {
    console.log("请求拦截",config);
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    if (window.sessionStorage.getItem('userInfo_soft')) {
      var str = window.sessionStorage.getItem('userInfo_soft')
      var user = JSON.parse(str)
      const token = user ? user.token : null
      token && (config.headers.Authorization = token)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  (res) => {
    console.log("响应拦截",res);
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    //todo
    console.log(err.response)
    if (err.response) {
      switch (err.response.data.code) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('logOut')
          console.log('未登录')
          router
            .replace({
              path: '/login'
              // query: { redirect: router.currentRoute.fullPath } // 登陆跳转之前页面
            })
            .catch((err) => {
              err
            })
          break;
        case 500:
          console.log(500)
          this.$message.error('网络好像有点问题')
          break;
      }
      if (err.response.data.message.indexOf('401') != -1) {
        store.commit('logOut')
        router
          .replace({
            path: '/login'
            // query: { redirect: router.currentRoute.fullPath } // 登陆跳转之前页面
          })
          .catch((err) => {
            err
          })
        console.log('未登录')
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    //todo
    return Promise.reject(err.response)
  }
)
instance.defaults.timeout = 20000
instance.defaults.baseURL = GlobalDatas.baseAxisUrl

const xhr = {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      instance
        .get('/api' + url, params)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  post: (url, params) => {
    return instance.post('/api' + url, params)
  },

  //调试接口只调了登录，之后以后再调
  login: (params) => {
    return instance.post("/admin/login", params)
  },
  logout: (params) => {
    return instance.get('/logout', params)
  },
  getImg: (url, params) => {
    return new Promise((resolve, reject) => {
      instance
        .get(url, params)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  }
}

const def = function(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post('/api' + url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export { xhr, def }
