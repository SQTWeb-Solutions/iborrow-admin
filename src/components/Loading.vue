<template>
  <div class="progress" :style="{
    width: '100%',
    height: height,
    opacity: show ? 1 : 0,
    'background-color': canSuccess ? color : failedColor
  }"></div>
</template>

<script>
// https://github.com/nuxt/nuxt.js/blob/master/lib/app/components/nuxt-loading.vue
import Vue from 'vue'
export default {
  data: () => ({
    percent: 0,
    show: false,
    canSuccess: true,
    duration: 3000,
    height: '2px',
    color: '#652392',
    failedColor: '#fd383c'
  }),

  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style scoped>
.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100px;
  width: 0%;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
  -webkit-animation: shift-rightwards 1s ease-in-out infinite;
    -moz-animation: shift-rightwards 1s ease-in-out infinite;
    -ms-animation: shift-rightwards 1s ease-in-out infinite;
    -o-animation: shift-rightwards 1s ease-in-out infinite;
    animation: shift-rightwards 1s ease-in-out infinite;
    -webkit-animation-delay: .3s;
    -moz-animation-delay: .3s;
    -o-animation-delay: .3s;
    animation-delay: .3s
}

@-webkit-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }
    40% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    60% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@-moz-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }
    40% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    60% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@-o-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }
    40% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    60% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }
    40% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    60% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%)
    }
    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}
</style>
