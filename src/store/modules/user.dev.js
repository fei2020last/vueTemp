"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GlobalDatas = require("../../utils/GlobalDatas");

var _axios = _interopRequireDefault(require("../../utils/axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    isLogin: sessionStorage.isLogin || false,
    year: _GlobalDatas.GlobalDatas.getYear(),
    month: _GlobalDatas.GlobalDatas.getMonth().slice(5),
    province: '全国'
  },
  getters: {},
  mutations: {
    login: function login(state) {
      state.isLogin = true;
      sessionStorage.isLogin = true;
    },
    logOut: function logOut(state) {
      state.isLogin = false;
      sessionStorage.isLogin = false;
    },
    setNavTime: function setNavTime(state, data) {
      state.date = data;
    },
    setProvince: function setProvince(state, province) {
      state.province = province;
    }
  },
  actions: {// getLastDate({ commit }, data) {
    //   axios("/water/getNowTime", {})
    //     .then(r => {
    //       commit("setNavTime", r.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  }
};
exports["default"] = _default;