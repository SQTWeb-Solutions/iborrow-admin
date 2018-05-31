<template>
  <div class="c-card u-mb-small">
      <header class="c-card__header u-text-center u-pt-large">
          <a class="c-card__icon" href="/">
            <img src="@/assets/img/logo.png" alt="iBorrow">
          </a>
          <h1 class="u-text-big u-mb-zero">
              402 <em class="u-block u-text-mute u-text-large">Account Unathorised</em>
          </h1>
      </header>

      <div class="c-card__body">
          <h2 class="u-h5 u-text-center u-mb-medium">
              Sorry, but you did not have permision to view that resource, please request the admin to perform the operation on your behalf.
          </h2>

          <span class="c-divider c-divider--small has-text u-mv-medium">OR</span>
          <router-link tag="a" :to="{ path: $store.state.route.from.fullPath }" class="c-btn c-btn--secondary c-btn--fullwidth">Back to previous page</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'unathorised',
  metaInfo () {
    return {
      title: 'Unauthorised Found'
    }
  }
}
</script>
