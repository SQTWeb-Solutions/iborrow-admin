<template>
  <header class="c-navbar">
    <button class="c-sidebar-toggle u-mr-small">
        <span class="c-sidebar-toggle__bar"></span>
        <span class="c-sidebar-toggle__bar"></span>
        <span class="c-sidebar-toggle__bar"></span>
    </button>
    <h2 class="c-navbar__title u-mr-auto">{{this.$route.meta.title}}</h2>
    <notifications dropdownToggle="messagesDropdown" firstItem icon="icon-message-circle" :items="messages"></notifications>
    <notifications dropdownToggle="actionDropdown" icon="icon-target"></notifications>
    <notifications dropdownToggle="dropdownAlerts" lastItem :items="alerts"></notifications>

    <div class="c-dropdown dropdown">
      <!-- TODO: SHow logged in user informations -->
        <a  class="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" href="#" id="dropdwonMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="c-avatar__name" >QA</span>
        </a>

        <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
            <router-link :to="{ name: 'profile.edit' }"  class="c-dropdown__item dropdown-item">My Profile</router-link>
            <a class="c-dropdown__item dropdown-item" href="#">View Activities</a>
            <a @click.prevent="logoutUser" class="c-dropdown__item dropdown-item" href="#">Logout</a>
        </div>
    </div>
  </header>
</template>

<script>
import Notifications from './Topbar/Notifications'
import Messages from '@/resources/datas/messages'
import Alerts from '@/resources/datas/alerts'
export default {
  name: 'page-header',
  data () {
    return {
      messages: Messages.reverse(),
      alerts: Alerts.reverse()
    }
  },
  components: {
    Notifications
  },
  methods: {
    //  Logout the user from the application
    async logoutUser (e) {
      e.preventDefault()
      try {
        this.$toastr.s('Logging out now')
        await this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'landing-page' })
      } catch (err) {
        this.$toastr.e(err.response.data.message)
      }
    }
  }
}
</script>
