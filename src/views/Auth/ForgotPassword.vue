<template>
  <div class="c-card u-mb-xsmall">
    <header class="c-card__header u-pt-large">
      <a class="c-card__icon" href="/">
        <img src="@/assets/img/logo.png" alt="iBorrow">
      </a>
      <h1 class="u-h3 u-text-center ">Forgot your password?</h1>
      <p class="u-h6 u-text-mute u-text-center">
          Enter your email address to receive password reset instructions
      </p>
    </header>
    <form class="c-card__body" method="post">
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="username">Enter your email address</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('username') }" v-model="username"  name="username" v-validate="'required'" type="text" id="username" placeholder="clark@iborrow.com">
        <form-error :caption="errors.first('username')" v-if="errors.has('username')"></form-error>
      </div>

      <button class="c-btn c-btn--fancy c-btn--fullwidth" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : 'Send reset link' }}</button>
      <span class="c-divider c-divider--small has-text u-mv-medium">Remember your password</span>
      <router-link tag="a" :to="{ name: 'auth.login' }" class="c-btn c-btn--secondary c-btn--fullwidth">Proceed to login</router-link>
    </form>
  </div>
</template>
<script>
import FormError from '@/components/FormError'
export default {
  name: 'forgot-password',
  metaInfo () {
    return {
      title: 'Forgot Password'
    }
  },
  components: {
    FormError
  }
}
</script>
