<template>
  <div class="hello">
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus == 'drop'}">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      topStatus: '',
      list: ['aa', 'bb', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc', 'cc']
    }
  },
  methods: {
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop () {
      console.log('我刷新了')
      setTimeout(function () {
        this.topStatus = ''
      }.bind(this), 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
