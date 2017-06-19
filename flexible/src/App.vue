<template>
  <div id="app">
    <div id="fd_header">
      <div class="goback">
        <a @click="goback" href="javascript:history.back();">
          返回
        </a>
      </div>
      <h2 class="header_title">{{ title }}</h2>
      <div class="gohome">
        <a @click="gohome" :href="homeurl">
          主页
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  props: {
    title: {
      type: String,
      default: '这里是标题'
    },
    homeurl: {
      type: String,
      default: './index.html'
    },
    icon_goback: {
      type: String,
      default: '#icon-fanhui'
    },
    icon_gohome: {
      type: String,
      default: '#icon-shouye1'
    }
  },
  components: {
  },
  methods: {
    goback () {
      this.$emit('goback', false)
      history.back()
    },
    gohome () {
      this.$emit('gohome', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'app.styl'
</style>
