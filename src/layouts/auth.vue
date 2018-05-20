<template>
  <transition name="page" mode="out-in">
    <div id="app" class="main-page-wrapper">
      <loading ref="loading"></loading>
      <div class="o-page__card">
        <router-view/>
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'auth',

  data: () => ({}),
  metaInfo () {
    return {
      title: 'Authentication',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'o-page o-page--center' },
      noscript: [{ innerHTML: 'This website requires JavaScript.' }]
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
