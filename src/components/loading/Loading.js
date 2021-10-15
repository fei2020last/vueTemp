/**
 * Created by admin on 2020/7/31.
 */
import Vue from 'vue'
import loadingComponent from './Loading.vue'
const LoadingConstructor = Vue.extend(loadingComponent)
const instance = new LoadingConstructor({
  el: document.createElement('div')
})
instance.show = false // 默认隐藏
export const HSoftLoading = {
  show() { // 显示方法
    instance.show = true
    document.body.appendChild(instance.$el)
  },
  hide() { // 隐藏方法
    instance.show = false
  }
}