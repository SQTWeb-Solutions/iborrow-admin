<template>
  <div>
    <h4 class="c-sidebar__title">Quick Link</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <router-link :to="{ name: 'dashboard' }" class="c-sidebar__link " >
          <i class="feather icon-monitor u-mr-xsmall"></i>Overview
        </router-link>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link " href="#">
          <i class="feather icon-pie-chart u-mr-xsmall"></i>Analytics
        </a>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link " href="#">
          <i class="feather icon-share-2 u-mr-xsmall"></i>Transactions
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Borrowers</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-hash u-mr-xsmall"></i>Trendings
        </a>
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-cast u-mr-xsmall"></i>Borrowing Requests
        </a>
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-package u-mr-xsmall"></i>All Borrowers
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Investors</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-hash u-mr-xsmall"></i>Trendings
        </a>
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-bookmark u-mr-xsmall"></i>Investment Requests
        </a>
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-briefcase u-mr-xsmall"></i>All Investors
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Business Opportunity</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-hash u-mr-xsmall"></i>Trendings
        </a>
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-globe u-mr-xsmall"></i>All Business
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Consultations</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-shield u-mr-xsmall"></i>Legal Consultations
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Action Links</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <router-link class="c-sidebar__link" :to="{ name: 'members.all' }">
          <i class="feather icon-users u-mr-xsmall"></i>All Staffs
        </router-link>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-message-square u-mr-xsmall"></i>Messanger
        </a>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-bell u-mr-xsmall"></i>Notifications
        </a>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-target u-mr-xsmall"></i>Activities
        </a>
      </li>
    </ul>
    <h4 class="c-sidebar__title">Account</h4>
    <ul class="c-sidebar__list">
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" target="_blank" href="#">
          <i class="feather icon-user u-mr-xsmall"></i>My Account
        </a>
      </li>
      <li class="c-sidebar__item">
        <a class="c-sidebar__link" href="#" @click.prevent="logoutUser">
          <i class="feather icon-log-out u-mr-xsmall"></i>Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation-link',
  created () {
    this.$emit('rendered', true)
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
