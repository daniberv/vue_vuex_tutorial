<template>
  <div id="app">
    <Header></Header>
    <Confirm ref="confirm"></Confirm>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Confirm from '@/components/Confirm'

export default {
  name: 'App',
  components: {
    Header, Confirm
  },
  mounted() {
    this.$root.$confirm = this.$refs.confirm.open
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
