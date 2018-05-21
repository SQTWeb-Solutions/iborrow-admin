<template>
  <div>
    <div class="c-toolbar u-justify-between u-mb-medium">
      <nav class="c-counter-nav">
          <p class="c-counter-nav__title">Statistics:</p>
          <member-counter title="Moderator" :total="20"></member-counter>
          <member-counter title="Editor" :total="10"></member-counter>
          <member-counter title="Consultant" :total="40"></member-counter>
          <member-counter title="Admin" :total="20" :active="active"></member-counter>
      </nav>

      <router-link :to="{ name: 'members.add' }" class="c-btn c-btn--info"><i class="feather icon-plus u-mr-xsmall u-opacity-heavy"></i> Add Member</router-link>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="loaded">
        <member-list name="Johnson Name"></member-list>
        <member-list ></member-list>
        <member-list ></member-list>
        <member-list ></member-list>
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
import MemberCounter from '@/components/Member/MemberCounter'
import { mapGetters } from 'vuex'
export default {
  name: 'member-view',
  data () {
    return {
      loaded: false,
      active: true,
      currenRole: false
    }
  },
  components: {
    SearchLoader,
    MemberList,
    MemberCounter
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  },
  computed: {
    ...mapGetters('auth', {
      userRole: 'roles'
    })
  },
  created () {
    this.currenRole = this.userRole
  }
}
</script>
