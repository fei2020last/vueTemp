/**
 * 全局属性封装
 * Created by admin on 2018/4/3.
 */
export const global = {}

// 网络相关配置开始
if (process.env.NODE_ENV === 'production') {
  //生产环境
  console.log("生产环境");
  global.baseUrl = "/prod/";
} else {
  //测试环境
  console.log("测试环境");
  global.baseUrl = "/dev";
}

global.timeout = 3000
global.netError = '网络好像有点问题'
global.unLogin = '请先登录'
global.noDataError = '暂无数据'
global.loadingText = '加载中'
global.netSuccess = 200
global.isUseFBase64 = false /*是否Base64加密*/
global.pageSize = 10 // 每页显示条数
global.pageNo = 1 // 当前页码(从第几页开始)

//下拉刷新
global.pulldownConfig = {
  content: '下拉刷新',
  pullUpHeight: 200,
  height: 40,
  autoRefresh: false,
  downContent: '向下滑动刷新',
  upContent: '下拉刷新',
  loadingContent: '加载中...',
  clsPrefix: 'xs-plugin-pullup-'
};
//上拉加载更多
global.pullupConfig = {
  content: '上拉加载更多',
  downContent: '松开进行加载',
  upContent: '上拉加载更多',
  loadingContent: '加载中...'
};

/**
 * 获取时间的方法以get开头命名 时间格式化以format开头命名 校验以check开头命名
 * @returns 
 */

//返回 2018 格式 全局的年份
global.getYear = function () {
  return window.localStorage.getItem('yeardata')
}

//返回 2018-06 格式
global.getMonth = function () {
  var now = new Date()
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  if (mon < 10) {
    mon = '0' + mon
  }
  return year + '-' + mon
}

// ——————————————获取当前日期(格式：2019-03-26)————————————————————————
global.getCurrentDate = function () {
  var myDate = new Date();
  var nowY = myDate.getFullYear();
  var nowM = myDate.getMonth() + 1;
  var nowD = myDate.getDate();
  var endDate = nowY + "-" + (nowM < 10 ? "0" + nowM : nowM) + "-" + (nowD < 10 ? "0" + nowD : nowD); //当前日期
  return endDate
}

//————————————————时间格式化————————————————————————
//返回 2018-06-29 00:00 格式
global.formatMinute = function (date) {
  var now = new Date(date);
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var date = now.getDate();
  var hours = now.getHours();
  var minute = now.getMinutes();
  if (mon < 10) {
    mon = '0' + mon;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  return year + '-' + mon + '-' + date + ' ' + hours + ":" + minute;
}

//返回 2018-06-29 格式
global.formatDate = function (date) {
  var now = new Date(date);
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var date = now.getDate();
  if (mon < 10) {
    mon = '0' + mon;
  }
  if (date < 10) {
    date = '0' + date;
  }
  return year + '-' + mon + '-' + date;
}

//传入2018-06 返回 201806 格式
global.formatDateMonth = function (date) {
  return date.substring(0, 4) + date.substring(5, 7)
}

//传入201806 格式 6位 返回 2018-06 格式
global.formatDateMonthHeng = function (date) {
  return date.substring(0, 4) + '-' + date.substring(4, 6)
}

//传入20180629格式  8位 返回 2018-06-29 格式
global.formatDateString = function (date) {
  return date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6)
}

//————————————————校       验————————————————————————
//身份证号校验
global.checkInfo = function (idcard) {
  console.log(idcard)
  console.log(idcard.toUpperCase())
  idcard = idcard.toUpperCase(); // 对身份证号码做处理
  var ereg;
  var Y, JYM;
  var S, M;
  /*基本校验*/
  //if (String.isNullOrEmpty(idcard)) return false;
  var idcard_array = new Array();
  idcard_array = idcard.split("");
  /*身份号码位数及格式检验*/
  switch (idcard.length) {
    case 15:
      if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0)) {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
      } else {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
      }
      if (ereg.test(idcard)) {
        return true
      } else {
        return false
      }
      break;
    case 18:
      //18位身份号码检测
      //出生日期的合法性检查
      //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
      //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
      if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9XxAa]$/; //闰年出生日期的合法性正则表达式
      } else {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9XxAa]$/; //平年出生日期的合法性正则表达式
      }
      if (ereg.test(idcard)) { //测试出生日期的合法性
        //计算校验位
        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
          (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
          (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
          (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
          (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
          (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
          (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
          parseInt(idcard_array[7]) * 1 +
          parseInt(idcard_array[8]) * 6 +
          parseInt(idcard_array[9]) * 3;
        Y = S % 11;
        M = "F";
        JYM = "10X98765432";
        M = JYM.substr(Y, 1);
        /*判断校验位*/
        if (M === idcard_array[17]) {
          /*检测ID的校验位false;*/
          return true
        } else if (idcard_array[17] === 'A') { //A结尾不校验规则
          return true
          /*检测ID的校验位false;*/
        } else {
          return false
        }
      } else {
        return false
      }
      break;
    default:
      return false
  }
}

// 手机号校验
global.checkPhoneNum = function (phoneNum) {
  phoneNum = phoneNum.trim()
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phoneNum)) {
    return false;
  } else {
    return true;
  }
}

//座机校验 区号 - 号码
global.checkTelephoneNum = function (telephoneNum) {
  telephoneNum = telephoneNum.trim()
  var myreg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (!myreg.test(telephoneNum)) {
    return false;
  } else {
    return true;
  }
}

//邮箱校验
global.checkEmailNum = function (emailNum) {
  emailNum = emailNum.trim()
  var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (!myreg.test(emailNum)) {
    return false;
  } else {
    return true;
  }
}

global.isShowLog = true // 是否打印log true 打印  false 不打印
// 日志打印...
global.hlog = function (...params) {
  if (global.isShowLog) {
    console.log(...params)
  }
}

global.jsonTree = function (data, config = {}) {
  //1.声明了变量，拿到传参过来的值，注意这里拿到的是string类型，不是对应的值
  var id = config.id || "id",
    pid = config.pid || "pid",
    children = config.children || "children";
  var idMap = [],
    newIdMap = [],
    jsonTree = [];
  /*2.v[id]==v[“id”]==v.id
      idMap数组的下标对应着id为下标的相应json数据
      a[1]对应着id为1的json数据，以此类推*/
  data.forEach(function (v) {
    idMap[v[id]] = v;
  });
  //3拿到当前遍历的父元素id
  /*			根据父元素id，判断数组里是否存在这样一条数据
              存在，就判断父元素是否有子元素数组，若没有就添加一个children数组（传参过来的） 
              把当前元素添加父元素的children数组里
              不存在，就直接添加到jsonTree里*/
  data.forEach(function (v) {
    var parent = idMap[v[pid]];
    //定义一个newIdMap
    delete v.parent; //删除{v}的parent和id
    //delete v.id;
    if (parent) {
      !parent[children] && (parent[children] = []);
      parent[children].push(v);
    } else {
      jsonTree.push(v);
    }
  });
  return jsonTree;
};

global.toLower = function (arr, id, vm) {
  for (var i = 0; i < arr.length; i++) {
    vm.$set(arr[i], 'mxid', id)
    var obj = arr[i];
    for (var key in obj) {
      var newKey = key.toLowerCase();
      if (newKey) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }
  return arr
}
global.toLowerAI = function (arr, id, vm) {
  for (var i = 0; i < arr.length; i++) {
    vm.$set(arr[i], 'aipid', id)
    var obj = arr[i];
    for (var key in obj) {
      var newKey = key.toLowerCase();
      if (newKey) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }
  return arr
}

global.toLowerCh = function (arr, id, vm) {
  for (var i = 0; i < arr.length; i++) {
    vm.$set(arr[i], 'hdpId', id)
    var obj = arr[i];
    for (var key in obj) {
      var newKey = key.toLowerCase();
      if (newKey) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }
  return arr
}