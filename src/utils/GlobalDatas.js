/**
 * Created by admin on 2018/4/3.
 */
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export const GlobalDatas = {}

// 网络相关配置开始
if (process.env.NODE_ENV === 'production') {
  //外网
  GlobalDatas.baseAxisUrl = '/shj' /*axios地址*/
} else if (process.env.NODE_ENV === 'pre') {
  //正式
  GlobalDatas.baseAxisUrl = '/shj' /*axios地址*/
} else {
  // GlobalDatas.baseAxisUrl = '/dev' /*axios地址*/
  GlobalDatas.baseAxisUrl = '192.168.7.30:8088' /*axios地址*/
}


GlobalDatas.netSuccess02 = 200
GlobalDatas.pageSize = [20, 40, 60, 80, 100, 200]
GlobalDatas.pageCounts = 20
GlobalDatas.startPageNum = 1

GlobalDatas.urlChange = true /*true正式环境   false  开发环境*/
GlobalDatas.kzdyClick = true  /*地图控制单元点击状态*/

GlobalDatas.timeout = 3000
GlobalDatas.netError = '网络好像有点问题'
GlobalDatas.unLogin = '请先登录'
GlobalDatas.noDateError = '暂无数据'
GlobalDatas.loadingText = '加载中'
GlobalDatas.netSuccess = 1

GlobalDatas.echartsXSize = 20
GlobalDatas.echartsYSize = 16
GlobalDatas.echartsToolSize = 25
GlobalDatas.echartsXtoolsize = 16
GlobalDatas.echartsTitleSize = 20
GlobalDatas.echartSize = 18
GlobalDatas.isUseFBase64 = true // 是否加密
// 网络相关配置结束

// GlobalDatas.pageSize = 10
// GlobalDatas.startPageNum = 1

GlobalDatas.back = function(vm) {}
// 获取时间的方法以get开头命名 时间格式化以format开头命名 校验以check开头命名

GlobalDatas.pulldownConfig = {
  content: '下拉刷新',
  pullUpHeight: 200,
  height: 40,
  autoRefresh: false,
  downContent: '向下滑动刷新',
  upContent: '下拉刷新',
  loadingContent: '加载中...',
  clsPrefix: 'xs-plugin-pullup-'
}
GlobalDatas.pullupConfig = {
  content: '上拉加载更多',
  downContent: '松开进行加载',
  upContent: '上拉加载更多',
  loadingContent: '加载中...'
}
// ——————————————获取当前日期(格式：2019-03-26)————————————————————————
GlobalDatas.getCurrentDate = function() {
  var myDate = new Date()
  var nowY = myDate.getFullYear()
  var nowM = myDate.getMonth() + 1
  var nowD = myDate.getDate()
  var enddate = nowY + '-' + (nowM < 10 ? '0' + nowM : nowM) + '-' + (nowD < 10 ? '0' + nowD : nowD) //当前日期
  return enddate
}
/*获取当前日期(格式：2019-03*/
GlobalDatas.getCurrentMonth = function() {
  var myDate = new Date()
  var nowY = myDate.getFullYear()
  var nowM = myDate.getMonth() + 1 //TODO
  var nowD = myDate.getDate()
  var enddate = nowY + '-' + (nowM < 10 ? '0' + nowM : nowM) //当前日期
  return enddate
}
// 201903
GlobalDatas._getCurrentMonth = function() {
  var myDate = new Date()
  var nowY = myDate.getFullYear()
  var nowM = myDate.getMonth() + 1 //TODO
  var nowD = myDate.getDate()
  var enddate = nowY + (nowM < 10 ? '0' + nowM : nowM) //当前日期
  return enddate
}

GlobalDatas._getLMonth = function() {
  var myDate = new Date()
  var nowY = myDate.getFullYear()
  var nowM = myDate.getMonth()
  var nowD = myDate.getDate()
  var enddate = nowY + '-' + (nowM < 10 ? '0' + nowM : nowM) //当前日期
  return enddate
}
// 201903

GlobalDatas.formatHour = function(date, type) {
  var now = new Date(date)
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  var date = now.getDate()
  var hours = now.getHours()
  var minute = now.getMinutes()
  if (mon < 10) {
    mon = '0' + mon
  }
  if (date < 10) {
    date = '0' + date
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (type == 'day') {
    return year + '年' + mon + '月' + date + '日 '
  } else if (type == 'hour') {
    return year + '年' + mon + '月' + date + '日 ' + hours + '时'
  }
}
//————————————————时间格式化————————————————————————
//返回 2018-06-29 00:00 格式
GlobalDatas.formatMinute = function(date) {
  var now = new Date(date)
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  var date = now.getDate()
  var hours = now.getHours()
  var minute = now.getMinutes()
  if (mon < 10) {
    mon = '0' + mon
  }
  if (date < 10) {
    date = '0' + date
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  return year + '-' + mon + '-' + date + ' ' + hours + ':' + minute
}

//返回 2018-06-29 00:00:00 格式
GlobalDatas.formatGetSeconds = function(date) {
  var now = new Date(date)
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  var date = now.getDate()
  var hours = now.getHours()
  var minute = now.getMinutes()
  var seconds = now.getSeconds()

  if (mon < 10) {
    mon = '0' + mon
  }
  if (date < 10) {
    date = '0' + date
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return year + '-' + mon + '-' + date + ' ' + hours + ':' + minute + ':' + seconds
}

//返回 2018 格式 全局的年月
GlobalDatas.getYear = function() {
  // var now = new Date()
  // var year = now.getFullYear().toString()
  // if (now.getDate() < 15) {
  //   if (now.getMonth() == 0) {
  //     return year - 1
  //   } else if (now.getMonth() == 1) {
  //     return year - 1
  //   }
  // } else {
  //   if (now.getMonth() == 0) {
  //     return year - 1
  //   } else if (now.getMonth() == 1) {
  //     return year - 1
  //   }
  //   return year
  // }
  return window.localStorage.getItem('yeardata')
}
//返回 08
GlobalDatas.getLastMonth = function() {
  // var now = new Date()
  // var month = now.getMonth()
  //
  // if (now.getDate() < 15) {
  //   if (now.getMonth() == 0) {
  //     month = 11
  //   } else if (now.getMonth() == 1) {
  //     month = 12
  //   }
  // } else {
  //   month--
  // }
  // // if (month == 0) {
  // //   month = 12
  // // }
  // month = month.toString()
  // if (month < 10) {
  //   month = '0' + month
  // }
  // return month

  return window.localStorage.getItem('monthdata')
}

//返回 8
GlobalDatas._getLastMonth = function() {
  var now = new Date()
  var month = now.getMonth().toString()
  return month
}

//返回 2018-06 格式
GlobalDatas.getMonth = function() {
  var now = new Date()
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  if (mon < 10) {
    mon = '0' + mon
  }
  return year + '-' + mon
}
GlobalDatas._getMonth = function(date) {
  var now = new Date(date)
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  if (mon < 10) {
    mon = '0' + mon
  }
  return year + '' + mon
}
//返回 2018-06-29 格式
GlobalDatas.formatDate = function(date) {
  var now = new Date(date)
  var year = now.getFullYear()
  var mon = now.getMonth() + 1
  var date = now.getDate()
  if (mon < 10) {
    mon = '0' + mon
  }
  if (date < 10) {
    date = '0' + date
  }
  return year + '-' + mon + '-' + date
}

//传入2018-06 返回 201806 格式
GlobalDatas.formatDateMonth = function(date) {
  return date.substring(0, 4) + date.substring(5, 7)
}

//传入20180629格式  8位 返回 2018-06-29 格式
GlobalDatas.formatDateString = function(date) {
  return date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6)
}

//传入201806 格式 6位 返回 2018-06 格式
GlobalDatas.formatDateMonthHeng = function(date) {
  return date.substring(0, 4) + '-' + date.substring(4, 6)
}

//————————————————校       验————————————————————————
//身份证号校验
GlobalDatas.checkInfo = function(idcard) {
  console.log(idcard)
  console.log(idcard.toUpperCase())
  idcard = idcard.toUpperCase() // 对身份证号码做处理
  var ereg
  var Y, JYM
  var S, M
  /*基本校验*/
  //if (String.isNullOrEmpty(idcard)) return false;
  var idcard_array = new Array()
  idcard_array = idcard.split('')
  /*身份号码位数及格式检验*/
  switch (idcard.length) {
    case 15:
      if (
        (parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0 ||
        ((parseInt(idcard.substr(6, 2)) + 1900) % 100 === 0 &&
          (parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0)
      ) {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ //测试出生日期的合法性
      } else {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/ //测试出生日期的合法性
      }
      if (ereg.test(idcard)) {
        return true
      } else {
        return false
      }
    case 18:
      //18位身份号码检测
      //出生日期的合法性检查
      //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
      //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
      if (
        parseInt(idcard.substr(6, 4)) % 4 === 0 ||
        (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)
      ) {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9XxAa]$/ //闰年出生日期的合法性正则表达式
      } else {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9XxAa]$/ //平年出生日期的合法性正则表达式
      }
      if (ereg.test(idcard)) {
        //测试出生日期的合法性
        //计算校验位
        S =
          (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
          (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
          (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
          (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
          (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
          (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
          (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
          parseInt(idcard_array[7]) * 1 +
          parseInt(idcard_array[8]) * 6 +
          parseInt(idcard_array[9]) * 3
        Y = S % 11
        M = 'F'
        JYM = '10X98765432'
        M = JYM.substr(Y, 1)
        /*判断校验位*/
        if (M === idcard_array[17]) {
          /*检测ID的校验位false;*/
          return true
        } else if (idcard_array[17] === 'A') {
          //A结尾不校验规则
          return true
          /*检测ID的校验位false;*/
        } else {
          return false
        }
      } else {
        return false
      }
    default:
      return false
  }
}

// 手机号校验
GlobalDatas.checkPhoneNum = function(phoneNum) {
  phoneNum = phoneNum.trim()
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(phoneNum)) {
    return false
  } else {
    return true
  }
}

//座机校验 区号 - 号码
GlobalDatas.checkTelephoneNum = function(telephoneNum) {
  telephoneNum = telephoneNum.trim()
  var myreg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  if (!myreg.test(telephoneNum)) {
    return false
  } else {
    return true
  }
}

//邮箱校验
GlobalDatas.checkEmailNum = function(emailNum) {
  emailNum = emailNum.trim()
  var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (!myreg.test(emailNum)) {
    return false
  } else {
    return true
  }
}

GlobalDatas.isShowLog = true // 是否打印log true 打印  false 不打印
// 日志打印...
GlobalDatas.hlog = function(...params) {
  if (GlobalDatas.isShowLog) {
    console.log(...params)
  }
}
GlobalDatas.jsonTree = function(data, config = {}) {
  //1.声明了变量，拿到传参过来的值，注意这里拿到的是string类型，不是对应的值
  var id = config.id || 'id',
    pid = config.pid || 'pid',
    children = config.children || 'children'
  var idMap = [],
    newIdMap = [],
    jsonTree = []
  /*2.v[id]==v[“id”]==v.id
      idMap数组的下标对应着id为下标的相应json数据
      a[1]对应着id为1的json数据，以此类推*/
  data.forEach(function(v) {
    idMap[v[id]] = v
  })
  //3拿到当前遍历的父元素id
  /*			根据父元素id，判断数组里是否存在这样一条数据
              存在，就判断父元素是否有子元素数组，若没有就添加一个children数组（传参过来的）
              把当前元素添加父元素的children数组里
              不存在，就直接添加到jsonTree里*/
  data.forEach(function(v) {
    var parent = idMap[v[pid]]
    //定义一个newIdMap
    delete v.parent //删除{v}的parent和id
    //delete v.id;
    if (parent) {
      !parent[children] && (parent[children] = [])
      parent[children].push(v)
    } else {
      jsonTree.push(v)
    }
  })
  return jsonTree
}

// {
//   type: 'linear',
//   x: 0,
//   y: 0,
//   x2: 0,
//   y2: 1,
//   colorStops: [
//     { offset: 0, color: '#1DFFF7' },
//     { offset: 1, color: '#23D6FC' }
//   ]
// }

GlobalDatas.echart = {
  weatherColor: ['#41A8FF', '#69D0EC', '#73deb3', '#ffb761'],
  szzsColor: ['#26c9cc', '#15E0AF', '#FF966A'],
  szzsColor2: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#abffe3' },
        { offset: 1, color: '#45acfc' }
      ]
    }
  ],
  szzsColor3: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#ffd8b7' },
        { offset: 1, color: '#fc880d' }
      ]
    }
  ],

  tbbhBarColor: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#4BDBFF' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#3680FF' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FFD48D' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FF9494' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#26c9cc' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#A6FFDA' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#4BDBFF' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#3680FF' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    }
  ],
  tbbhBarColor2: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FF9494' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FFD48D' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#26c9cc' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#A6FFDA' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FF9494' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FFD48D' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    }
  ],
  tbbhBarColor4: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#23D6FC' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#1DFFF7' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#C89009' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FFF970' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    }
  ],
  tbbhBarColor3: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#4BDBFF' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#3680FF' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#C89009' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FFF970' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    }
  ]
}
GlobalDatas.zdly = [
  '黄河流域',
  '西北诸河',
  '东南诸河',
  '长江流域',
  '西南诸河',
  '珠江流域',
  '松花江流域',
  '淮河流域',

  '海河流域',
  '辽河流域'
]
GlobalDatas.zdlyA = [
  { label: '黄河流域', value: '黄河流域' },
  { label: '西北诸河', value: '西北诸河' },
  { label: '东南诸河', value: '浙闽片河流' },
  { label: '长江流域', value: '长江流域' },
  { label: '西南诸河', value: '西南诸河' },
  { label: '珠江流域', value: '珠江流域' },
  { label: '松花江流域', value: '松花江流域' },
  { label: '淮河流域', value: '淮河流域' },
  { label: '海河流域', value: '海河流域' },
  { label: '辽河流域', value: '辽河流域' }
]
GlobalDatas.setZsTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }
      tips += item.seriesName + ':'
      switch (item.value) {
        case 0:
          tips += '无'
        case 1:
          tips += 'Ⅰ类'
          break
        case 2:
          tips += 'Ⅱ类'
          break
        case 3:
          tips += 'Ⅲ类'
          break
        case 4:
          tips += 'Ⅳ类'
          break
        case 5:
          tips += 'Ⅴ类'
          break
        case 6:
          tips += '劣Ⅴ类'
          break
      }
      tips += '<br />'
    })
  }
  return tips
}
GlobalDatas.setlineTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      if (item.seriesName.indexOf('水质指数') != -1) {
        tips += item.value
      } else {
        tips += item.value + '%'
      }
      tips += '<br />'
    })
  }
  return tips
}
GlobalDatas.setPerTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      tips += item.value + '%'
      tips += '<br />'
    })
  }
  return tips
}
GlobalDatas.setNumTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      tips += item.value + '个'
      tips += '<br />'
    })
  }
  return tips
}
GlobalDatas.setAreaTotip = function(params, unit) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      tips += item.value + unit
      tips += '<br />'
    })
  }
  return tips
}
GlobalDatas._setPerTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        if (item.data > 0) {
          tips += item.marker.replace('[object Object]', color[0])
        } else {
          tips += item.marker.replace('[object Object]', color[1])
        }
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      tips += item.value + '%'
      tips += '<br />'
    })
  }
  return tips
}

// this.$datas.toDetailArea(params.name,this)
GlobalDatas.toDetailArea = function(pro, obj, city) {
  let routeData = obj.$router.resolve({
    path: 'provincial',
    query: {
      province: pro,
      city: city
    }
  })
  window.open(routeData.href, '_blank')
}
GlobalDatas.toDmxq = function(code, obj) {
  let routeData = obj.$router.resolve({
    path: 'dmxq',
    query: {
      code: code
    }
  })
  window.open(routeData.href, '_blank')
}
GlobalDatas.toGyyq = function(id, obj) {
  let routeData = obj.$router.resolve({
    path: 'industrialPark',
    query: {
      id: id
    }
  })
  window.open(routeData.href, '_blank')
}
GlobalDatas.toSyfx = function(code) {
  // window.open(`http://10.251.112.135:8555/#/hydComparison?sectionCode=${code}`, '_blank')

  // window.open(`http://10.251.112.135:8555/#/oneMap?sectionCode=${code}`, '_blank')
  window.open(`http://10.251.106.96:8555/#/hydComparison?sectionCode=${code}`, '_blank')
  // window.open(`http://10.251.106.96:8555/#/oneMap?sectionCode=${code}`, '_blank')
}

/*菜单权限*/
GlobalDatas.getPermission = function(code) {
  if (
    window.sessionStorage.getItem('userInfo_soft') &&
    window.sessionStorage.getItem('userInfo_soft') !== 'null'
  ) {
    var str = window.sessionStorage.getItem('userInfo_soft')
    var permission = JSON.parse(str)
    var mapData = new Map()
    for (var item of permission.menus) {
      mapData.set(item.key, item.value)
    }
    return mapData.get(code)
  } else {
    return false
  }
  return mapData.get(code)
}

GlobalDatas.setMlgTotip = function(params, color) {
  var tips = ''
  if (params !== null && params.length > 0) {
    tips += params[0].axisValue + '<br />'
    params.forEach((item, index) => {
      if (item.marker.indexOf('[object Object]') != -1) {
        tips += item.marker.replace('[object Object]', color[index].colorStops[1].color)
      } else {
        tips += item.marker
      }

      tips += item.seriesName + ': '
      tips += item.value + 'mg/L'
      tips += '<br />'
    })
  }
  return tips
}

/**/
GlobalDatas.getUserPermission = function(code) {
  // return true
  if (
    window.sessionStorage.getItem('userInfo_permission') &&
    window.sessionStorage.getItem('userInfo_permission') !== 'null'
  ) {
    var str = window.sessionStorage.getItem('userInfo_permission')
    var permission = JSON.parse(str)
    var mapData = new Map()
    for (var item of permission) {
      mapData.set(item.permission, item.name)
    }
    return mapData.get(code)
  } else {
    return false
  }

}

GlobalDatas.handleDownload = function(id, title, header, params, listData) {
  let table = document.querySelector('#' + id).cloneNode(true)
  // 因为element-ui的表格的fixed属性导致多出一个table，会下载重复内容，这里删除掉
  if (table.querySelector('.el-table__fixed')) {
    table.removeChild(table.querySelector('.el-table__fixed'))
  }
  if (table.querySelector('.el-table__fixed-right')) {
    table.removeChild(table.querySelector('.el-table__fixed-right'))
  }
  let wb = XLSX.utils.table_to_book(table, { raw: true }) //mytable为表格的id名
  /* get binary string as output */
  let excName = title
  let wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'array'
  })
  try {
    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), excName + '.xlsx')
  } catch (e) {
    if (typeof console !== 'undefined') console.log(e, wbout)
  }
  return wbout
}
function formatJson(filterVal, jsonData) {
  return jsonData.map((v, i) =>
    filterVal.map((j) => {
      if (j === 'index_data') {
        return i + 1
      } else {
        return v[j]
      }
    })
  )
}

GlobalDatas.jsonTree = function(data, config = {}) {
  //1.声明了变量，拿到传参过来的值，注意这里拿到的是string类型，不是对应的值
  var id = config.id || 'value',
    pid = config.pid || 'pid',
    children = config.children || 'children'
  var idMap = [],
    newIdMap = [],
    jsonTree = []
  /*2.v[id]==v[“id”]==v.id
  idMap数组的下标对应着id为下标的相应json数据
  a[1]对应着id为1的json数据，以此类推*/
  data.forEach(function(v) {
    idMap[v[id]] = v
  })
  //3拿到当前遍历的父元素id
  /*			根据父元素id，判断数组里是否存在这样一条数据
        存在，就判断父元素是否有子元素数组，若没有就添加一个children数组（传参过来的）
        把当前元素添加父元素的children数组里
        不存在，就直接添加到jsonTree里*/
  data.forEach(function(v) {
    var parent = idMap[v[pid]]
    //定义一个newIdMap
    console.log(parent)
    delete v.parent //删除{v}的parent和id
    //delete v.id;
    if (parent) {
      !parent[children] && (parent[children] = [])
      parent[children].push(v)
    } else {
      jsonTree.push(v)
    }
  })
  return jsonTree
}

/*详情类别*/
GlobalDatas.detailsType = function(val) {
  var typeMap = new Map([
    ['01', '0'],
    ['02', '1'],
    ['03', '2'],
    ['04', '3'],
    ['11', '4'],
    ['12', '5'],
    ['13', '6'],
    ['21', '7'],
    ['22', '8'],
    ['31', '9'],
    ['32', '10'],
    ['33', '11'],
    ['34', '12'],
    ['35', '13'],
    ['36', '14'],
    ['37', '15'],
    ['38', '16']
  ])
  if (typeMap.get(val)) {
    return typeMap.get(val)
  } else {
    return ''
  }
}

/*问题类别*/
GlobalDatas.proType = function(val) {
  var str = val.toString()
  var typeMap = new Map([
    ['0', '水环境质量差'],
    ['01', '断面水质明显恶化'],
    ['02', '在较大河流干流形成污染物峰值'],
    ['03', '人为因素导致饮用水水源超标'],
    ['04', '供水厂出水和用户水龙头水质超标'],
    ['1', '水生态受损重'],
    ['11', '重要水体生态缓冲带受损'],
    ['12', '重要水体水源涵养区退化'],
    ['13', '重要湖库蓝藻水华爆发风险高'],
    ['2', '水资源保障不足'],
    ['21', '重要水体'],
    ['22', '重要区域'],
    ['3', '重点工作滞后'],
    ['31', '断面'],
    ['32', '工业园区'],
    ['33', '污水处理厂'],
    ['34', '饮用水水源保护区'],
    ['35', '黑臭水体治理'],
    ['36', '污水处理厂进水'],
    ['37', '预警函'],
    ['38', '调查发现']
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

/*问题状态*/
GlobalDatas.getProType = function(val) {
  var str = val.toString()
  var typeMap = new Map([
    ['0', '系统识别'],
    ['1', '新增问题'],
    ['2', '专家研判'],
    ['3', '已研判确认'],
    ['4', '重新研判'],
    ['5', '已研判删除'],
    ['6', '预警函'],
    ['7', '问题和症结分析'],
    ['8', '整改措施制定'],
    ['9', '结果报送'],
    ['10', '整改完成'],
    ['11', '延期整改'],
    ['12', '独立调查'],
    ['13', '调度通报'],
    ['14', '责任追究']
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

/*问题类别2*/
GlobalDatas.proType2 = function(val) {
  if (!val) {
    return ''
  }
  var str = val.toString()
  var typeMap = new Map([
    ['0', '水环境'],
    ['01', '断面水质明显恶化'], //0
    ['02', '在较大河流干流形成污染物峰值'], //1
    ['03', '人为因素导致饮用水水源超标'], //2
    ['04', '南水北调调水水质超标'], //2
    ['05', '有毒有害物质'], //2
    ['1', '水生态'],
    ['11', '重要水体生态缓冲带受损'], //3
    ['12', '重要水体水源涵养区退化'], //4
    ['13', '重要湖库蓝藻水华爆发风险高'], //5
    ['2', '水资源'],
    ['21', '流量（水位）未达到生态流量（水位）要求'], //6
    ['22', '河流干涸断流程度加剧'], //7
    ['3', '重点工作滞后地区'],
    ['31', '国控断面消除劣Ⅴ类工作滞后'], //8
    ['32', '国控断面达标工作滞后'], //9
    ['33', '工业园区综合整治滞后'], //10
    ['34', '黑臭水体治理滞后'], //11
    ['35', '饮用水水源保护工作滞后'], //12
    ['36', '其他情形'] //13
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

/*详情类别*/
GlobalDatas.detailsType2 = function(val) {
  if (!val) {
    return ''
  }
  var typeMap = new Map([
    ['01', '0'],
    ['02', '1'],
    ['03', '2'],

    ['11', '3'],
    ['12', '4'],
    ['13', '5'],

    ['21', '6'],
    ['22', '7'],

    ['31', '8'],
    ['32', '9'],
    ['33', '10'],
    ['34', '11'],
    ['35', '12'],
    ['36', '13']
  ])
  if (typeMap.get(val)) {
    return typeMap.get(val)
  } else {
    return ''
  }
}

/*问题状态2*/
GlobalDatas.getProType2 = function(val) {
  if (!val) {
    return ''
  }

  // ['3', '问题症结'],
  //     ['4', '整改措施'],
  //     ['5', '整改结果'],

  var str = val.toString()
  var typeMap = new Map([
    ['0', '待确认'],
    ['1', '已确认'],
    ['2', '预警函'],

    ['3', '地方反馈'],
    ['4', '地方反馈'],
    ['5', '地方反馈'],

    ['6', '独立调查'],
    ['7', '现场调查'],
    ['8', '跟踪督办'],
    ['9', '销号'],
    ['10', '调度通报'],
    ['11', '督导帮扶'],
    ['12', '线索移交'],
      ['13', '上报水司'],
      ['14', '水司驳回'],
      ['15', '建议销号'],
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

GlobalDatas.getColorsSype = function(val) {
  if (!val) {
    return ''
  }
  var str = val.toString()
  var typeMap = new Map([
    ['0', '#e7a693'],
    ['1', '#7c7aff'],
    ['2', '#ff962d'],
    ['3', '#09d03b'],
    ['4', '#ff2d45'],
    ['5', '#5fdbe7'],
    ['6', '#e78cd3'],
    ['7', '#8993e7'],
    ['8', '#4a58d0'],
    ['9', '#ff2d45'],
    ['10', '#c16145'],
    ['11', '#282fa2'],
    ['12', '#5051ff'],
    ['13', '#ff7818'],
    ['14', '#45be50'],
    ['15', '#be753d'],
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

/*独立调查状态2*/
GlobalDatas.getDldc = function(val) {
  if (!val) {
    return ''
  }
  var str = val.toString()
  var typeMap = new Map([
    ['0', '待分配'],
    ['1', '待确认'],
    ['2', '调查中'],
    ['3', '调查完成'],
    ['4', '退回']
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

/*多个问题状态*/
GlobalDatas.getStates = function(val) {
  if (!val) {
    return ''
  }
  var typeMap = new Map([
    ['0', '待确认'],
    ['1', '已确认'],
    ['2', '预警函'],

    ['3', '地方反馈'],
    ['4', '地方反馈'],
    ['5', '地方反馈'],

    ['6', '独立调查'],
    ['7', '现场调查'],
    ['8', '跟踪督办'],
    ['9', '销号'],
    ['10', '调度通报'],
    ['11', '督导帮扶'],
    ['12', '线索移交'],
    ['13', '上报水司'],
    ['14', '水司驳回'],
    ['15', '建议销号'],

  ])
  var str = val.toString()
  var arr = str.split('、')
  var namearr = []
  for (var item of arr) {
    if (typeMap.get(item)) {
      namearr.push(typeMap.get(item))
    } else {
      namearr.push('')
    }
  }
  var strName = namearr.join('、')
  return strName
}
//南水北调
GlobalDatas.proSouth = function(val) {
  if (!val) {
    return ''
  }
  var str = val.toString()
  var typeMap = new Map([
    ['0', '劣V类'],
    ['1', '南水北调中线'],
    ['2', '南水北调东线']
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

//新增本低值清单中的类型
GlobalDatas.quesType = function(val) {
  if (!val) {
    return ''
  }
  var str = val.toString()
  var typeMap = new Map([
    ['0', '1个'],
    ['1', '多个'],
    ['2', '不参评'],
    ['3', '1个或不参评'],
    ['4', '多个或不参评']
  ])
  if (typeMap.get(str)) {
    return typeMap.get(str)
  } else {
    return ''
  }
}

GlobalDatas.getUid = function() {
  var s = []
  var hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'
  let uuid = s.join('')
  return uuid
}






