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
