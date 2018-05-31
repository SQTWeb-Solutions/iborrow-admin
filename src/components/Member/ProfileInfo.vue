<template>
<div class="col-md-5 order-1 order-md-2">
  <div class="c-card u-p-medium u-mb-medium">
    <div class="u-text-center">
        <div class="c-avatar c-avatar--large u-mb-small u-inline-flex">
            <!--<img class="c-avatar__img" src="img/avatar-150.jpg" alt="Adam's Face"> -->
            <span class="c-avatar__name" >SN</span>
        </div>

        <h3 class="u-h5">Gerald Vaughn</h3>
        <p>Freelance Designer, Previously TapQ</p>
        <span class="u-text-mute u-text-small">London, United Kingdom</span>
    </div>
    <div class="u-flex u-mt-medium">
      <a class="c-btn c-btn--info c-btn--fullwidth u-mr-xsmall" href="#" v-if="currentUserRole === 'admin'">Edit Profile</a>
      <a class="c-btn c-btn--fancy c-btn--fullwidth" href="#">Send John Message</a>
    </div>
    <div class="c-feed has-icons u-mt-medium">
      <profile-feed title="Email Address" content="email@email.com" icon="icon-at-sign"></profile-feed>
      <profile-feed title="Username" content="@username" icon="icon-user"></profile-feed>
      <profile-feed title="Role" content="Moderator" icon="icon-feather"></profile-feed>
    </div>
  </div>
  <div class="c-card u-p-medium u-mb-medium">
    <h5 class="u-mb-small">User Information</h5>
    <table class="c-table u-border-zero">
      <tbody class="u-pt-small">
        <tr class="c-table__row u-border-zero">
          <td class="c-table__cell u-p-zero u-pb-xsmall u-pt-medium">Phone Number</td>
          <td class="c-table__cell u-p-zero u-pb-xsmall u-pt-medium">
            <span class="u-text-mute">0909090909</span>
          </td>
        </tr>
        <tr class="c-table__row u-border-zero">
          <td class="c-table__cell u-p-zero u-pb-xsmall">State</td>
          <td class="c-table__cell u-p-zero u-pb-xsmall">
            <span class="u-text-mute">Abuja</span>
          </td>
        </tr>
        <tr class="c-table__row u-border-zero">
          <td class="c-table__cell u-p-zero u-pb-xsmall">Address</td>
          <td class="c-table__cell u-p-zero u-pb-xsmall">
            <span class="u-text-mute">just some address</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import ProfileFeed from './ProfileFeed'
export default {
  name: 'profile-info',
  components: {
    ProfileFeed
  }
}
</script>
