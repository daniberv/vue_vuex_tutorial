<template>
  <div style="height: 100vh" class="d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div class="card" v-if="!loading">
                    <div class="card-body">
                        <h1>Login</h1>
                        <div class="form-group">
                            <input type="text" v-model="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control">
                        </div>
                        <button class="btn btn-primary" @click="login">Login</button>
                    </div>
                </div>
                <div v-else>
                    loading...
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: ''
        }
    },
    computed: {
        loading: function() {
            return this.$store.state.user.loading
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login')
        }
    }
}
</script>

<style>

</style>