<template>
  <a href="#" class="c-dropdown__item dropdown-item o-media">
      <span class="o-media__img u-mr-xsmall">
          <span class="c-avatar c-avatar--xsmall" >
              <span class="c-avatar__img u-flex u-justify-center u-align-items-center u-color-white" :class="color">
                <span v-if="avatar">{{this.meta.content}}</span>
                <i class="feather u-text-large u-color-white" :class="this.meta.content" v-else></i>
              </span>
          </span>
      </span>
      <div class="o-media__body">
          <h6 class="u-mb-zero">{{title}}</h6>
          <p class="u-text-mute">{{content}}</p>
      </div>
  </a>
</template>

<script>
export default {
  name: 'notification-item',
  data () {
    return {
      color: null,
      avatar: false
    }
  },
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    meta: {
      type: Object
    }
  },
  created () {
    const meta = this.meta

    switch (meta.color) {
      case 'success':
        this.color = 'u-bg-success'
        break
      case 'info':
        this.color = 'u-bg-info'
        break
      case 'danger':
        this.color = 'u-bg-danger'
        break
      case 'warning':
        this.color = 'u-bg-warning'
        break
      default:
        this.color = 'u-bg-primary'
        break
    }

    switch (meta.type) {
      case 'avatar':
        this.avatar = true
        break
      default:
        this.avatar = false
        break
    }
  }
}
</script>
