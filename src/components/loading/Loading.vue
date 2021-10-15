<template>
  <div class="Loading" v-if="show">
    <div class="loadingBox">
      <img src="../../assets/img/loading.gif" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Loading',
  props: {
    show: Boolean,
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  activated () {
  },
  methods: {
  }
}
</script>
<style lang="less">
.Loading {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  .loadingBox {
    background-color: #333;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
