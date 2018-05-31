<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="c-candidate">
      <div class="c-candidate__info pt-1">
          <div class="c-candidate__avatar">
            <!--<img src="@/assets/img/avatar/avatar2.jpg" alt="Candiates's Avatar">-->
            <span class="c-candidate_avatar__name" :class="bgColor">{{shortName}}</span>
          </div>
          <div class="c-candidate__meta">
            <h3 class="c-candidate__title">{{ name }}
              <span class="c-candidate__country">
                <i class="feather icon-user"></i> {{ role }}
              </span>
            </h3>
            <div class="c-candidate__actions">
              <a href="#" @click="$emit('show-modal', id, index)" v-if="currentUserRole === 'admin'" class="c-tooltip c-tooltip--bottom" aria-label="Delete User"><i class="feather icon-trash"></i></a>
              <a href="#" v-if="currentUserRole === 'admin'" class="c-tooltip c-tooltip--bottom" aria-label="Edit User"><i class="feather icon-settings"></i></a>
            </div>
          </div>
      </div>
      <div class="c-candidate__footer">
        <a href="#" class="c-btn c-btn--info">
          <i class="feather icon-message-square u-mr-xsmall u-opacity-heavy"></i>New Message
        </a>
        <a href="#" class="c-btn c-btn--primary">
          <i class="feather icon-users u-mr-xsmall u-opacity-heavy"></i>View Info
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Set links to redirect to
// TODO: Display profile picture when the user set profile picture active
export default {
  name: 'member-list',
  data () {
    return {
      bgColor: null
    }
  },
  props: {
    index: {
      type: Number
    },
    id: {
      type: String
    },
    username: {
      type: String
    },
    name: {
      type: String
    },
    role: {
      type: String
    },
    currentUserRole: {
      type: String
    },
    shortName: {
      type: String
    }
  },
  created () {
    // Check for the user role and set the backgroud based on the user role
    switch (this.role) {
      case 'admin':
        this.bgColor = 'u-bg-danger'
        break
      case 'moderator':
        this.bgColor = 'u-bg-fancy'
        break
      case 'consultant':
        this.bgColor = 'u-bg-primary'
        break
      case 'editor':
        this.bgColor = 'u-bg-success'
        break
      default:
        this.bgColor = 'u-bg-info'
        break
    }
  }
}
</script>
