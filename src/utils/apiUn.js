/**
 * Created by Administrator on 2020/11/12.
 */
/**
 *
 * Created by admin on 2020/7/31.
 * 接口模块封装
 */

import {post} from './axiosRequest.js'//引入封装的文件中的post方法
import {get} from './axiosRequest.js'//引入封装的文件中的get方法

// 获取消息公告表——收藏
export const getApiXxggCollectionData = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggCollectionData', data)
}
// 获取消息公告列表——未读
export const getApiXxggUnreadData = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggUnreadData', data)
}
//获取消息公告表——历史
export const getApiXxggHistoryData = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggHistoryData', data)
}

//全部未读变已读
export const getApiXxggReadAll = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggReadAll', data)
}

//未读变已读
export const getApiXxggRead = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggRead', data)
}
//收藏和取消收藏
export const enble = (data) => {
  return post('/userAuth/api/shj/xxgg/enable', data)
}

//发布消息——获取模板名称
export const getApiXxggMbName = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggMbName', data)
}

//获取模板列表
export const getApiXxggMbData = (data) => {
  return post('/userAuth/api/shj/xxggMb/getApiXxggMbData', data)
}

//修改消息发布模板
export const updateApiXxggMb = (data) => {
  return post('/userAuth/api/shj/xxggMb/updateApiXxggMb', data)
}
//添加消息发布模板
export const saveApiXxggMb = (data) => {
  return post('/userAuth/api/shj/xxggMb/saveApiXxggMb', data)
}
//删除消息发布模板
export const deleteApiXxggMb = (data) => {
  return post('/userAuth/api/shj/xxggMb/deleteApiXxggMb', data)
}

//根据id获取模板内容
export const getApiXxggMbCount = (data) => {
  return post('/userAuth/api/shj/xxgg/getApiXxggMbCount', data)
}
//消息发布————保存
export const addApiXxggRelease = (data) => {
  return post('/userAuth/api/shj/xxgg/addApiXxggRelease', data)
}
