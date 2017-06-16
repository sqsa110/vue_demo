<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ getUserName }}</div>
    <div>
      <button type="button" @click="submit">提交</button>
      <button type="button" @click="submitInit">初始化</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      getUserName: 'getUserName'
    })
  },
  methods: {
    submit () {
      console.log(this.getUserName)
    },
    submitInit () {
      this.$store.dispatch('userNameInitState')
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
