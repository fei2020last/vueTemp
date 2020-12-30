<template>
  <div id="app">
    <router-view></router-view>
    <div
      v-if="curTagName !== 'login'"
      class="copyWriting"
      :style="{ color: curTagName === 'homePage' ? '#ffffff' : '' }"
    >*本平台中数据仅用于管理工作参考，不用于考核和发布</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      curTagName: ''
    }
  },
  watch: {
    $route: {
      handler(newRouter) {
        console.log('newRouter', newRouter)
        console.log('11111', this.$route)
        this.curTagName = newRouter.name
      },
      immediate: true
    }
  }
}
</script>

<style>
html {
  background: #deebfd;
}
.copyWriting {
  bottom: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  position: absolute;
}
.el-month-table td.today .cell {
  color: #333 !important;
  font-weight: bold !important;
}
.el-month-table td.current:not(.disabled) .cell {
  color: #245df1 !important;
  font-weight: bold !important;
}
.el-cascader-menu {
  min-width: 220px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, Microsoft Yahei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 600px;
  min-width: 1580px;
  overflow: hidden;
}
a {
  text-decoration: none;
}
.el-dialog {
  /*margin-top: 5vh !important;*/
}
.el-dialog__wrapper {
  overflow: hidden !important;
}
*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*定义纵向滚动条宽度*/
  height: 8px; /*定义横向滚动条高度*/
}

*::-webkit-scrollbar-thumb {
  /*滚动条内部滑块*/
  border-radius: 4px;
  background: #dfe8f5;
  transition: background-color 0.3s;
}

*::-webkit-scrollbar-thumb:hover {
  /*鼠标悬停滚动条内部滑块*/
  /* background: #bbb; */
}

*::-webkit-scrollbar-track {
  /*滚动条内部轨道*/
  /* background: #ededed; */
}
.szlb-pop {
  z-index: 5000 !important;
}
</style>
<style lang="less">
/*.el-popper{*/
/*min-width: 0 !important;*/
/*}*/
#app {
  .el-table {
    th {
      background: rgba(65, 168, 255, 0.14) !important;
      // padding: 6px 4px;
      color: #1b263c;
      font-weight: 600;
      .cell {
        white-space: pre-line;
        // height: 40px;
        background: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
    }
    td {
      font-size: 16px;
      .cell {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        font-size: 18px;
      }
    }
  }
  .el-table td.click-column .cell {
    color: #3471df;
    text-decoration: underline;
    cursor: pointer;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: rgba(65, 168, 255, 0.14);
  }
  .table_box,
  .table_box02 {
    width: 100%;
    height: 65vh !important;
    position: relative;
    .table_title {
      margin-top: 10px;
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      /*// color: #ffffff;*/
      color: #1b263c;
      font-size: 18px;
      font-weight: 600;
      /*// background-image: linear-gradient(-47deg, #8ba3ff 0%, #41a8ff 100%);*/
      margin-bottom: 10px;
    }
  }
  .el-dialog {
    /*width: 1600px;*/
    /*height: 650px;*/
    .el-dialog__body {
      height: calc(100% - 50px);
      .table_box02 {
        height: 100%;
        .el-table td,
        .el-table th {
          padding: 0;
          height: 60px;
          text-align: center;
          // font-weight: 400;
        }
        .el-table th {
          background: #eff8ff;
          font-size: 16px;
          padding: 12px 4px;
          color: #1b263c;
        }
      }
    }
    .el-dialog__close {
      /*font-size: 26px;*/
    }
  }
  .sstj {
    margin-bottom: 10px;
    height: 50px;
    position: absolute;
    top: -70px;
    right: 40px;
    z-index: 1;
    .el-input {
      width: 220px;
      margin-right: 10px;
    }
  }
}
</style>
