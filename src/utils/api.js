/**
 *
 * Created by admin on 2020/7/31.
 * 接口模块封装
 */

import { post } from './axiosRequest.js' //引入封装的文件中的post方法
import { get } from './axiosRequest.js' //引入封装的文件中的get方法

// 登录
export const getLogin = (data) => {
  return post('/loginSystem', data)
}

// 单点///登录
export const getSingleLogin = (data) => {
  return get('/login', data)
}

// 获取独立调查数据——待调查
export const getDldcCompleteData = (data) => {
  return post('/userAuth/api/shj/dldc/getDldcCompleteData', data)
}

// 获取发起调查的详情
export const getDmInfo = (data) => {
  return post('/userAuth/api/shj/dldc/getDmInfo', data)
}

// 发起独立调查列表
export const getList = (data) => {
  return post('/userAuth/api/shj/dldc/list', data)
}

// // 用户列表
// export const treeList = (data) => {
//   return post('/sys/office/treeList', data)
// }

// 用户列表
export const treeList = (data) => {
  return post('/userAuth/api/shj/dldc/tree', data)
}

// 发起调查
export const publishDldc = (data) => {
  return post('/userAuth/api/shj/dldc/publishDldc', data)
}

// 断面详情
export const getDldcInfo = (data) => {
  return post('/userAuth/api/shj/dldc/getDldcInfo', data)
}
// 首页-水质指数
export const getSzzsInfo = (data) => {
  return post('/api/shj/getSzzsInfo', data)
}
// 首页-十大流域水质情况
export const ggetSdlySzqk = (data) => {
  return post('/api/shj/ggetSdlySzqk', data)
}
// 首页-水质占比个数
export const getSzzbgs = (data) => {
  return post('/api/shj/getSzzbgs', data)
}
// 首页-十大流域水质情况
export const getSdlySzqk = (data) => {
  return post('/api/shj/getSdlySzqk', data)
}

// 断面详情中获取独立调查的列表
export const getDldcData = (data) => {
  return post('/userAuth/api/shj/dldc/getDldcData', data)
}
//独立调查-行政辖区统计
export const getDldcSfTj = (data) => {
  return post('/userAuth/api/shj/dldc/getDldcSfTj', data)
}
//独立调查-流域统计
export const getDldcLyTj = (data) => {
    return post('/userAuth/api/shj/dldc/getDldcLyTj', data)
}
//新独立调查-列表
export const getDldcQd = (data) => {
    return post('/userAuth/api/shj/dldc/getDldcQd', data)
}
//新独立调查-行政辖区统计
export const getDldcXzxqTj = (data) => {
    return post('/userAuth/api/shj/dldc/getDldcXzxqTj', data)
}
//新独立调查-流域统计
export const getDldcSslyTj = (data) => {
    return post('/userAuth/api/shj/dldc/getDldcSslyTj', data)
}





// /*
// 问题识别
//
//
//
//
//2020-03 第四版问题识别*/
//发起独立调查
export const getInvestigation = (data) => {
    return post('/userAuth/api/shj/dldc/publishDldc', data)
}
// 40. 某个问题的独立调查清单
export const getDldcLog = (data) => {
    return post('/userAuth/api/shj/dldc/getDldcLog', data)
}

// 43. 独立调查详情
export const getDldcDetails = (data) => {
    return post('/userAuth/api/shj/dldc/get', data)
}

// 43. 独立调查转交
export const getyjDldc = (data) => {
    return post('/userAuth/api/shj/dldc/yjDldc', data)
}

//20 调度通报清单
export const getDdtbQd = (data) => {
    return post('/userAuth/api/shj/dldc/getDdtbQd', data)
}

// 调度通报生成
export const getAddDdtb = (data) => {
    return post('/userAuth/api/shj/dldc/addDdtb', data)
}


// 调度通报 发送
export const sendDdtb = (data) => {
    return post('/userAuth/api/shj/dldc/sendDdtb', data)
}

//24. 调度通报函详情

export const getDdtbInfo = (data) => {
    return post('/userAuth/api/shj/dldc/getDdtbInfo', data)
}

//24. 调度通报函各省问题清单

export const getDdtbQdInfo = (data) => {
    return post('/userAuth/api/shj/dldc/getDdtbQdInfo', data)
}

//24. 谋和问题的现场调查

export const getXcdcById = (data) => {
    return post('/userAuth/api/shj/dldc/getXcdcById', data)
}

//现场调查历史
export const getDldc = (data) => {
    return post('/userAuth/api/shj/dldc/getXcdcLog', data)
}
//现场调查历史详情
export const getXcdcLs = (data) => {
    return post('/userAuth/api/shj/dldc/getXcdcLs', data)
}
//销号问题
export const getXhwtQd = (data) => {
    return post('/userAuth/api/shj/dldc/getXhwtQd', data)
}


//获取问题原因
export const getAppWtType = (data) => {
    return post('/userAuth/api/shj/dldc/getAppWtType', data)
}
