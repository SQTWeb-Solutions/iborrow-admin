<template>
  <div class="c-card u-mb-small">
      <header class="c-card__header u-text-center u-pt-large">
          <a class="c-card__icon" href="/">
            <img src="@/assets/img/logo.png" alt="iBorrow">
          </a>
          <h1 class="u-text-big u-mb-zero">
              404 <em class="u-block u-text-mute u-text-large">Page Not Found</em>
          </h1>
      </header>

      <div class="c-card__body">
          <h2 class="u-h5 u-text-center u-mb-medium">
              Sorry, but we didn't find the page you are looking for. Try searching for it.
          </h2>

          <form>
              <div class="c-field has-icon-right u-mb-xsmall">
                  <span class="c-field__icon">
                      <i class="fa fa-search"></i>
                  </span>
                  <label class="c-field__label u-hidden-visually" for="input-search">Search</label>
                  <input class="c-input" id="input-search" type="text" placeholder="Search for something..">
              </div>
              <button class="c-btn c-btn--fancy c-btn--fullwidth">Search</button>
          </form>
          <span class="c-divider c-divider--small has-text u-mv-medium">OR</span>
          <router-link tag="a" :to="{ name: 'landing-page' }" class="c-btn c-btn--secondary c-btn--fullwidth">Back to home</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'error',
  metaInfo () {
    return {
      title: 'Error Page Not Found'
    }
  }
}
</script>
