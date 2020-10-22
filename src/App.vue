<template>
  <div id="app">
    <Confirm ref="confirm"></Confirm>
    <router-view></router-view>
  </div>
</template>

<script>
import Confirm from '@/components/Confirm'

export default {
  name: 'App',
  components: {
    Confirm
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
