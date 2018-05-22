<template>
  <div>
    <div class="c-toolbar u-justify-between u-mb-medium">
      <nav class="c-counter-nav">
          <p class="c-counter-nav__title">Statistics:</p>
          <div v-if="loaded" class="d-flex flex-row">
            <member-counter title="Moderator" :total="20"></member-counter>
            <member-counter title="Editor" :total="10"></member-counter>
            <member-counter title="Consultant" :total="40"></member-counter>
            <member-counter title="Admin" :total="20" :active="active"></member-counter>
          </div>
          <div class="c-counter-nav__item col-4" v-else>
              <content-placeholders-text :lines="1" />
          </div>
      </nav>

      <router-link :to="{ name: 'members.add' }" class="c-btn c-btn--info"><i class="feather icon-plus u-mr-xsmall u-opacity-heavy"></i> Add Member</router-link>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="loaded">
        <member-list v-for="member in members"
        :key="member.id"
        :name="member.displayName"
        :role="member.roles[0]"
        :currentUserRole="currentUserRole"
        :username="member.username"></member-list>
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
// TODO: Set paginatin and search
import SearchLoader from '@/components/Loader/SearchLoader'
import MemberList from '@/components/Member/MemberList'
import MemberCounter from '@/components/Member/MemberCounter'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'member-view',
  data () {
    return {
      loaded: false,
      active: true,
      currentUserRole: false,
      roles: [],
      members: []
    }
  },
  components: {
    SearchLoader,
    MemberList,
    MemberCounter
  },
  computed: {
    ...mapGetters('auth', {
      userRole: 'roles'
    })
  },
  created () {
    this.currentUserRole = this.userRole
    this.getMembers()
      .then(allMembers => {
        this.members = allMembers
        this.loaded = true
      })
      .catch(error => this.$toastr.e(error.message))
  },
  methods: {
    ...mapActions('member', {
      getMembers: 'fetchMember'
    })
  },
  metaInfo () {
    return {
      title: 'Members'
    }
  }
}
</script>
