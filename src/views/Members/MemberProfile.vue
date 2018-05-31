<template>
  <div>
    <div class="container-fluid u-mt-medium">
      <div class="row">
        <div class="col-md-7 order-2 order-md-1">
          <router-view ></router-view>
        </div>
        <profile-info></profile-info>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Member profile information to show
// TODO: Member profile activities to show
// TODO: Messages to show  messaging view for the users to communicate and load all already send messages between member
import { mapGetters } from 'vuex'
import ProfileInfo from '@/components/Member/ProfileInfo'
export default {
  name: 'member-profile-view',
  data () {
    return {
      currentUserRole: null
    }
  },
  components: {
    ProfileInfo
  },
  computed: {
    ...mapGetters('auth', {
      userRole: 'roles'
    })
  },
  created () {
    this.currentUserRole = this.userRole
  },
  methods: {
  },
  metaInfo () {
    return {
      title: 'Members Profile'
    }
  }
}
</script>
