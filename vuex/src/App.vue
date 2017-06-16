<template>
  <div id="app">
    <input type="text" v-model="username_text" />
    <ul @click="aaa">
      <li>{{ getUserName }}</li>
      <li>{{ $store.state.store.user_name }}</li>
      <li>{{ username_text }}</li>
    </ul>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      getUserName: 'getUserName'
    }),
    username_text: {
      get () {
        return this.getUserName
      },
      set (value) {
        this.$store.dispatch('changeUserName', value)
      }
    }
  },
  methods: {
    aaa () {
      console.log(this.$store.state)
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
</style>
