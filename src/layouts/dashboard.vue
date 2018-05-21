<template>
  <transition name="page" mode="out-in">
    <div id="app" class="main-page-wrapper">
      <loading ref="loading"></loading>
      <dashboard-sidebar></dashboard-sidebar>
      <main class="o-page__content">
        <page-header></page-header>
        <router-view/>
      </main>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import DashboardSidebar from '@/components/Sidebar'
import Sidebar from '@/assets/scripts/sidebar'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'dashboard',

  data: () => ({}),
  metaInfo () {
    return {
      title: 'Administrator Dashboard',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'o-page' },
      noscript: [{ innerHTML: 'This website requires JavaScript.' }]
    }
  },
  components: {
    Loading,
    DashboardSidebar,
    PageHeader
  },
  mounted () {
    this.$loading = this.$refs.loading
    Sidebar()
  }
}
</script>
