<template>
  <div>
    <div class="c-toolbar u-justify-between u-mb-medium">
      <nav class="c-counter-nav">
          <p class="c-counter-nav__title">Statistics:</p>
          <div class="c-counter-nav__item u-hidden-down@tablet">
              <a class="c-counter-nav__link" href="#">
                  <span class="c-counter-nav__counter">10</span>Total Member
              </a>
          </div>
          <div class="c-counter-nav__item u-hidden-down@tablet">
              <a class="c-counter-nav__link" href="#">
                  <span class="c-counter-nav__counter">3</span>Moderator
              </a>
          </div>
          <div class="c-counter-nav__item u-hidden-down@tablet">
              <a class="c-counter-nav__link" href="#">
                  <span class="c-counter-nav__counter">4</span>Editor
              </a>
          </div>
          <div class="c-counter-nav__item">
              <a class="c-counter-nav__link is-active" href="#">
                  <span class="c-counter-nav__counter">2</span>Admin
              </a>
          </div>

      </nav>

      <router-link :to="{ name: 'dashboard' }" class="c-btn c-btn--info"><i class="feather icon-plus u-mr-xsmall u-opacity-heavy"></i> Add Member</router-link>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="loaded">
        <member-list></member-list>
        <member-list></member-list>
        <member-list></member-list>
        <member-list></member-list>
      </div>
      <div class="row" v-else>
        <search-loader></search-loader>
        <search-loader></search-loader>
        <search-loader></search-loader>
      </div>
    </div>
  </div>
</template>

<script>
import SearchLoader from '@/components/Loader/SearchLoader'
import MemberList from '@/components/Member/MemberList'
export default {
  name: 'member-view',
  data () {
    return {
      loaded: false
    }
  },
  components: {
    SearchLoader,
    MemberList
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  }
}
</script>
