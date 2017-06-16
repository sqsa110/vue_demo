<template>
  <div id="app">
    <div class="aaa"></div>
    <input type="text" v-model="aaa">
    <hello :aaa="aaa" @bbb="bbb"></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      aaa: 'aaa'
    }
  },
  methods: {
    bbb (text) {
      console.log('bbb事件触发了')
      alert(text)
    }
  },
  components: {
    Hello
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'app.styl'
</style>

