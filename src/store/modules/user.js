import { GlobalDatas } from '../../utils/GlobalDatas'
import axios from '../../utils/axios.js'

const state = {
  isLogin: sessionStorage.isLogin || false,
  year: GlobalDatas.getYear(),
  month: GlobalDatas.getMonth().slice(5),

  timeTab: '0',
  // province: '全国'
  province: ['', ''],
  river: '',
  area: {
    name: '全国',
    type: 0
  },
  eTitle: '各省分布',

  // 同比环比
  badStep: [1, 1]
}

const getters = {
  getProvince: (state) => {
    return state.province[0]
  },
  getCity: (state) => {
    return state.province[1]
  }
}

const mutations = {
  login(state) {
    state.isLogin = true
    sessionStorage.isLogin = true
  },

  logOut(state) {
    state.isLogin = false
    sessionStorage.isLogin = false
  },
  setNavTime(state, data) {
    state.date = data
  },
  setProvince(state, province) {
    state.province = province
    if (province[0] == '') {
      state.area.name = '全国'
      state.area.type = 0
      state.eTitle = '各省分布'
    } else if (!province[1] && !province[2]) {
      state.area.name = province[0]
      state.area.type = 1
      state.eTitle = '各市分布'
    } else if (!!province[2]) {
      state.area.name = province
      state.area.type = 'qu'
      // state.eTitle = '各市分布'
    } else {
      state.area.name = province
      state.area.type = 2
      state.eTitle = '各区分布'
    }
  },

  setUnqu(state) {
    state.area.type = 2
    state.eTitle = '各区分布'
  },
  setRiver(state, river) {
    state.river = river
    state.area.name = river
    state.area.type = 3
  },

  setTimeTab(state, tab) {
    state.timeTab = tab
  },
  setBadStep(state, {
    badStep,
    i
  }) {
    state.badStep[i - 2] = badStep
  }
}

const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}