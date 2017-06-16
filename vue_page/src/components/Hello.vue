<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ aaa }}</p>
    <a href="javascript:;" @click="send_bbb">点击我发送一个bbb事件</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    aaa: {
      type: String,
      default: 'aaa2'
    }
  },
  methods: {
    send_bbb () {
      this.$emit('bbb', '我发送了消息')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
