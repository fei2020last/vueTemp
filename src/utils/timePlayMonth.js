import $ from 'jquery'
import jQuery from 'jquery'
export function TimePlay(options) {
  var timePlay = this
  timePlay.default_option = {
    speed: 3000,
    startDate: 20100701,
    endDate: 20250831,
    container: '#timePlay',
    curr_date: '',
    onClickChangeEnd: function(timePlay) {},
    onAnimateEnd: function(timePlay) {}
  }
  timePlay.options = jQuery.extend(true, timePlay.default_option, options) //基本配置

  timePlay.initDoms() //初始化结构

  timePlay.timer = null //动画定时器
  timePlay.translate = 0 //时间轴位移
  timePlay.width = 0 //时间轴长度
  timePlay.left = $('.timeProgress-box').offset().left
  timePlay.right = $(window).width() - timePlay.left - $('.timeProgress-box').width()
  timePlay.dis = $('.timeProgress-inner li').outerWidth() //运动每格长度
  // timePlay.dis_hour  = timePlay.dis/24;//小时单位移动距离
  timePlay.curr_x = 0 //临时记录X轴位移
  timePlay.temp_day = {} //临时记录时间
  timePlay.curr_day = {} //进度条时间
  timePlay.index_hover = 0 //临时索引
  timePlay.hover = 0 //当前索引
  timePlay.delay = false //是否延迟
  timePlay.init() //初始化
}
TimePlay.prototype.init = function() {
  var timePlay = this
  timePlay.initDate2() //初始化日期

  // $('.timeUnitBtn').on('click',function(){//切换显示单位
  // 	var index = $(this).index();
  // 	timePlay.changeTimeUnit(index);
  // });

  $('.timeControl').on('click', function() {
    //时间轴播放暂停
    timePlay.play()
  })

  $('.timeProgress').on('mouseover', function() {
    timePlay.hoverPopup()
  })

  $('.timeProgress').on('click', function() {
    timePlay.clickPopup()
  })

  $('.next').on('click', function() {
    timePlay.pageNext()
  })

  $('.prev').on('click', function() {
    timePlay.pagePrev()
  })

  $('.today').on('click', function() {
    timePlay.stopPlay()
    timePlay.initDate()
  })

  $('.zksq').on('click', function() {
    //地图右侧拉起时 重新计算长度和偏移量等
    timePlay.progressAni()
  })
}

TimePlay.prototype.hoverPopup = function() {
  var timePlay = this
  $(window).on('mousemove', function(event) {
    var e = event || window.event
    var x = e.clientX
    var mon_index = Math.floor((x + timePlay.translate - timePlay.left) / timePlay.dis)
    timePlay.index_hover = mon_index
    timePlay.temp_day = {
      year: parseInt($('.every:eq(' + mon_index + ')').attr('data-year')),
      mon: parseInt(
        $('.every:eq(' + mon_index + ')')
          .find('.mon')
          .text()
      )
    }
    timePlay.curr_x = x + timePlay.translate - timePlay.left
    var texts = timePlay.temp_day.year + '年' + timePlay.temp_day.mon + '月'
    $('.hover-popup')
      .show()
      .css('left', x - timePlay.left)
      .text(texts)
  })

  $('.timeProgress').one('mouseleave', function() {
    $(window).off('mousemove')
    $('.hover-popup').hide()
  })
}

TimePlay.prototype.clickPopup = function() {
  var timePlay = this
  timePlay.stopPlay()
  var texts = timePlay.temp_day.year + '年' + timePlay.temp_day.mon + '月'
  $('.curr-popup')
    .hide()
    .text(texts)
  $('.curr-popup.for-click')
    .show()
    .css('left', timePlay.curr_x - timePlay.translate)
  $('.timeProgress-bar')
    .stop()
    .css('width', timePlay.curr_x)
  timePlay.width = timePlay.curr_x
  timePlay.curr_day = timePlay.temp_day
  timePlay.index = timePlay.index_hover
  timePlay.options.onClickChangeEnd()
}

TimePlay.prototype.initDate = function() {
  //初始化日期
  var timePlay = this
  var curr_date = new Date()
  var year = curr_date.getFullYear()
  var month = curr_date.getMonth() + 1
  // var day = curr_date.getDate();
  // var hour = curr_date.getHours();
  $('.curr-popup').hide()
  $('.for-animate').show()
  timePlay.curr_day = {
    year: year,
    mon: month
    // "day": day,
    // "hour": hour
  }
  $('.curr-popup').text(year + '年' + month + '月')
  //定位当前时间
  for (var i = 0, len = $('.every').length; i < len; i++) {
    var y = parseInt($('.every:eq(' + i + ') .year').text())
    var m = parseInt($('.every:eq(' + i + ') .mon').text())
    if (year == y && month == m) {
      timePlay.index = i
      // timePlay.width  = timePlay.dis * i + timePlay.dis / 24 * hour; //计算当前pop定位
      timePlay.width = timePlay.dis * i + timePlay.dis / 2 //计算当前pop定位
      timePlay.progressAni()
      break
    }
  }
}

TimePlay.prototype.initDate2 = function() {
  //初始化日期
  var timePlay = this
  var myDateStr = jQuery('#date').val()
  //console.log('myDateStr',myDateStr)
  //console.log('this.options.curr_date',this.options.curr_date)
  //var curr_date = new Date(this.options.curr_date)
  var curr_date = new Date(myDateStr)
  var year = curr_date.getFullYear()
  var month = curr_date.getMonth() + 1
  // var day = curr_date.getDate();
  // var hour = curr_date.getHours();
  $('.curr-popup').hide()
  $('.for-animate').show()
  timePlay.curr_day = {
    year: year,
    mon: month
    // "day": day,
    // "hour": hour
  }
  $('.curr-popup').text(year + '年' + month + '月')
  //定位当前时间
  for (var i = 0, len = $('.every').length; i < len; i++) {
    var y = parseInt($('.every:eq(' + i + ') .year').text())
    var m = parseInt($('.every:eq(' + i + ') .mon').text())
    if (year == y && month == m) {
      timePlay.index = i
      // timePlay.width  = timePlay.dis * i + timePlay.dis / 24 * hour; //计算当前pop定位
      timePlay.width = timePlay.dis * i + timePlay.dis / 2 //计算当前pop定位
      timePlay.progressAni()
      break
    }
  }
}

TimePlay.prototype.initDoms = function() {
  //初始化dom
  var timePlay = this
  $(timePlay.options.container).hide()
  var mainContainer = $('<div id="timeMain"></div>'),
    playControl = '<div class="timeControl-box"><div class="timeControl play"></div></div>',
    pageControl =
      '<div class="prev-box"><div class="prev" title="上一页"></div></div><div class="next-box"><div class="next" title="下一页"></div></div>',
    timeAxis =
      '<div class="timeProgress-box"><div class="hover-popup"></div><div class="curr-popup for-click">17:00</div><div class="timeProgress-hide"><div class="timeProgress-inner"><div class="timeProgress"><div class="timeProgress-bar"><div class="curr-popup for-animate">17:00</div></div></div><ul></ul></div></div></div>'

  $(timePlay.options.container).append(mainContainer)
  mainContainer
    .append(playControl)
    .append(pageControl)
    .append(timeAxis)
  timePlay.fillDate(timePlay.options.startDate, timePlay.options.endDate)
}

//填充时间 将时间填进ul class every
TimePlay.prototype.fillDate = function(start, end) {
  var timePlay = this
  var startYear = Math.floor(start / 10000), //开始年
    startMonth = Math.floor((start % 10000) / 100), //开始月
    // startDay   = Math.floor(start%100), //开始天
    endYear = Math.floor(end / 10000),
    endMonth = Math.floor((end % 10000) / 100),
    // endDay     = Math.floor(end%100),
    datelist = ''
  while (startMonth != endMonth || startYear != endYear) {
    startMonth++
    if (startMonth > 12) {
      startMonth = 1
      startYear++
    }
    datelist +=
      '<li class="every" data-year=' +
      startYear +
      '><span class="year">' +
      startYear +
      '</span>/<span class="mon">' +
      startMonth +
      '</span></li>'
  }
  //   console.log(datelist);
  $(timePlay.options.container)
    .show()
    .find('ul')
    .append(datelist)
}

TimePlay.prototype.calcLeapYear = function(year) {
  var leap = false
  if (year % 4 == 0 && year % 100 == 0) {
    if (year % 400 == 0) {
      leap = true
    } else {
      leap = false
    }
  } else if (year % 4 == 0 && year % 100 != 0) {
    leap = true
  } else if (year % 4 != 0 && year % 100 != 0) {
    leap = false
  } else {
    leap = false
  }
  return leap
}

//大小月
TimePlay.prototype.monthCount = function(month) {
  var timePlay = this
  var num = 0
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    num = 31
  } else if (month == 4 || month == 5 || month == 9 || month == 11) {
    num = 30
  } else if (month == 2) {
    if (timePlay.calcLeapYear()) {
      num = 29
    } else {
      num = 28
    }
  }
  return num
}
//动画
TimePlay.prototype.progressAni = function() {
  //进度条动画
  var timePlay = this,
    page_width = $('.timeProgress-box').width(),
    con_width = $('.timeProgress-inner').width(),
    page_num = Math.floor(timePlay.width / page_width),
    left_dis = page_num * page_width //左侧距离

  //右侧距离小于一格增加一半容器宽度，half
  if (page_width - timePlay.width + left_dis < timePlay.dis) {
    left_dis = left_dis + page_width / 2
  }
  //？？
  if (left_dis + page_width > con_width) {
    left_dis = $('.timeProgress-inner').width() - page_width
    left_dis = left_dis < 0 ? 0 : left_dis
    $('.next').addClass('disable')
  }
  //
  if (timePlay.width - left_dis < timePlay.dis) {
    left_dis = left_dis - page_width / 2
  }
  console.log(left_dis)

  timePlay.translate = left_dis
  $('.timeProgress-inner').css({
    transform: 'translateX(-' + left_dis + 'px)'
  })
  $('.timeProgress-bar').animate(
    {
      width: timePlay.width
    },
    500,
    'linear'
  )
}

TimePlay.prototype.play = function() {
  var timePlay = this
  if ($('.timeControl').hasClass('play')) {
    timePlay.startPlay()
  } else {
    timePlay.stopPlay()
  }
}

TimePlay.prototype.delayAnimation = function() {
  var timePlay = this
  timePlay.delay = true
}

TimePlay.prototype.continueAnimation = function() {
  var timePlay = this
  timePlay.delay = false
}

TimePlay.prototype.startPlay = function() {
  var timePlay = this
  $('.timeControl')
    .toggleClass('play')
    .toggleClass('pause')
  $('.curr-popup').hide()
  $('.curr-popup.for-animate').show()
  timePlay.progressAni()
  timePlay.timer = setInterval(function() {
    if (timePlay.delay) {
      return false
    }
    var temp_date = timePlay.curr_day
    if (timePlay.reachEnd()) {
      timePlay.halfPageNext()
    }
    timePlay.index++
    var real_width = Math.floor(timePlay.width / timePlay.dis) * timePlay.dis
    timePlay.width = real_width + timePlay.dis + timePlay.dis / 2
    timePlay.curr_day = {
      year: parseInt($('.every:eq(' + timePlay.index + ')').attr('data-year')),
      mon: parseInt(
        $('.every:eq(' + timePlay.index + ')')
          .find('.mon')
          .text()
      )
    }
    if (timePlay.index < $('.every').length) {
      $('.curr-popup').text(timePlay.curr_day.year + '年' + timePlay.curr_day.mon + '月')
    }

    if (timePlay.width >= $('.timeProgress').width()) {
      timePlay.width = $('.timeProgress').width()
      timePlay.curr_day = temp_date
      timePlay.stopPlay()
    }
    $('.timeProgress-bar').css({ width: timePlay.width })
    timePlay.options.onAnimateEnd()
  }, timePlay.options.speed)
}

TimePlay.prototype.stopPlay = function() {
  var timePlay = this
  if ($('.timeControl').hasClass('pause')) {
    $('.timeControl')
      .toggleClass('play')
      .toggleClass('pause')
  }
  clearInterval(timePlay.timer)
}

TimePlay.prototype.reachEnd = function() {
  var timePlay = this
  var dis_right = $('.timeProgress-box').width() - (timePlay.width - timePlay.translate)
  if (dis_right <= 108) {
    return true
  } else {
    return false
  }
}

TimePlay.prototype.halfPageNext = function() {
  $('.curr-popup').hide()
  $('.curr-popup.for-animate').show()
  $('.prev').removeClass('disable')
  var timePlay = this,
    page_width = $('.timeProgress-box').width(),
    con_width = $('.timeProgress-inner').width()
  timePlay.translate += $('.timeProgress-box').width() / 2
  if (timePlay.translate + page_width > con_width + 40) {
    timePlay.translate = $('.timeProgress-inner').width() - page_width + 40
    $('.next').addClass('disable')
  }
  $('.timeProgress-inner').css({
    transform: 'translateX(-' + timePlay.translate + 'px)'
  })
}
TimePlay.prototype.pageNext = function() {
  $('.curr-popup').hide()
  $('.curr-popup.for-animate').show()
  $('.prev').removeClass('disable')
  var timePlay = this,
    page_width = $('.timeProgress-box').width(),
    con_width = $('.timeProgress-inner').width()
  timePlay.translate += $('.timeProgress-box').width()
  if (timePlay.translate + page_width > con_width + 40) {
    timePlay.translate = $('.timeProgress-inner').width() - page_width + 40
    $('.next').addClass('disable')
  }
  $('.timeProgress-inner').css({
    transform: 'translateX(-' + timePlay.translate + 'px)'
  })
}

TimePlay.prototype.pagePrev = function() {
  $('.next').removeClass('disable')
  $('.curr-popup').hide()
  $('.curr-popup.for-animate').show()
  var timePlay = this
  timePlay.translate -= $('.timeProgress-box').width()
  if (timePlay.translate < 5) {
    timePlay.translate = 0
    $('.prev').addClass('disable')
  }
  $('.timeProgress-inner').css({
    transform: 'translateX(-' + timePlay.translate + 'px)'
  })
}
