<template>
  <div>
    <div class="c-toolbar u-justify-between u-mb-medium">
      <nav class="c-counter-nav">
          <p class="c-counter-nav__title">Statistics:</p>
          <div v-if="loadedCount" class="d-flex flex-row">
            <member-counter v-for="group in membersCount"
              :key="group.id"
              :title="group._id[0]" :total="group.count" :active="group._id[0]===currentUserRole ? true : false"></member-counter>
          </div>
          <div class="c-counter-nav__item col-4 mt-1" style="width:200px" v-else>
              <content-placeholders-text :lines="1" />
          </div>
      </nav>

      <router-link v-if="currentUserRole === 'admin'" :to="{ name: 'members.add' }" class="c-btn c-btn--info"><i class="feather icon-plus u-mr-xsmall u-opacity-heavy"></i> Add Member</router-link>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="loaded">
        <member-list v-for="(member, index) in members"
        :key="index"
        :id="member._id"
        :index="index"
        v-on:show-modal="showOutModal"
        :name="member.displayName"
        :role="member.roles[0]"
        :currentUserRole="currentUserRole"
        :username="member.username"
        :shortName="member.shortName"></member-list>
      </div>
      <div class="row" v-else>
        <search-loader></search-loader>
        <search-loader></search-loader>
        <search-loader></search-loader>
      </div>
      <empty-member v-if="emptyMember"></empty-member>
    </div>
    <delete-modal v-if="apendModal" v-on:remove-member="removeMemberFromList" v-on:close-modal="closeShownModal" :member="deletingMemberId" :memberIndex="deletingMemberIndex"></delete-modal>
  </div>
</template>

<script>
import SearchLoader from '@/components/Loader/SearchLoader'
import MemberList from '@/components/Member/MemberList'
import MemberCounter from '@/components/Member/MemberCounter'
import EmptyMember from '@/components/Member/EmptyMember'
import DeleteModal from '@/components/Member/Modal'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'member-view',
  data () {
    return {
      loaded: false,
      active: false,
      apendModal: false,
      deletingMemberId: null,
      deletingMemberIndex: null,
      loadedCount: false,
      currentUserRole: false,
      roles: [],
      members: [],
      membersCount: [],
      emptyMember: false
    }
  },
  components: {
    SearchLoader,
    MemberList,
    MemberCounter,
    EmptyMember,
    DeleteModal
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
        /** Check if the member is empty or has content */
        if (Object.keys(allMembers).length === 0) {
          this.emptyMember = true
          this.loaded = true
        }
        this.members = allMembers
        this.loaded = true
      })
      .catch(error => this.$toastr.e(error.message))
    this.getMembersCount()
      .then(membersCount => {
        this.membersCount = membersCount
        this.loadedCount = true
      })
      .catch(error => this.$toastr.e(error.message))
  },
  methods: {
    ...mapActions('member', {
      getMembers: 'fetchMember',
      getMembersCount: 'fetchMemberCount'
    }),
    showOutModal (userId, index) {
      this.apendModal = true
      this.deletingMemberId = userId
      this.deletingMemberIndex = index
    },
    closeShownModal () {
      this.apendModal = false
    },
    removeMemberFromList (index) {
      this.members.splice(index, 1)
      this.deletingMemberIndex = null
    }
  },
  metaInfo () {
    return {
      title: 'Members'
    }
  }
}
</script>
