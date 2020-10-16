<template>
  <div
    v-show="isShow"
    @click.self="cancel"
    class="my-modal shadow"
  >
    <div class="my-modal__inner">
      <h3>Подтвердите</h3>

      <div class="my-modal__body">{{ message }}</div>

      <div class="mt-5">
        <button class="btn btn-primary shadow" @click="agree">{{ title }}</button>
      <button class="btn btn-link" @click="cancel">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      isShow: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
    }
  },
  methods: {
    open(title, message) {
      this.isShow = true
      this.title = title
      this.message = message
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree() {
      this.resolve(true)
      this.isShow = false
    },
    cancel() {
      this.resolve(false)
      this.isShow = false
    }
  }
}
</script>