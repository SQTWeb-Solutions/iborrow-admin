<template>
  <div class="c-card u-mb-xsmall">
    <header class="c-card__header u-pt-large">
      <a class="c-card__icon" href="/">
        <img src="@/assets/img/logo.png" alt="iBorrow">
      </a>
      <h1 class="u-h3 u-text-center u-mb-zero">Welcome back! Please login.</h1>
    </header>
    <form class="c-card__body" method="post">
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="username">Log in with your e-mail address/username</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('username') }" v-model="username"  name="username" v-validate="'required'" type="text" id="username" placeholder="clark@iborrow.com">
        <form-error :caption="errors.first('username')" v-if="errors.has('username')"></form-error>
      </div>

      <div class="c-field u-mb-small">
        <label class="c-field__label" for="password">Password</label>
        <input class="c-input " type="password" id="password" v-model="password"  name="password" v-validate="'required'" :class="{ 'c-input--danger': errors.has('password') }" placeholder="Numbers, Letters...">
        <form-error :caption="errors.first('password')" v-if="errors.has('password')"></form-error>
      </div>

      <button class="c-btn c-btn--fancy c-btn--fullwidth" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : 'Sign in to Dashboard' }}</button>
      <span class="c-divider c-divider--small has-text u-mv-medium">Can't remember login details</span>
      <router-link tag="a" :to="{ name: 'auth.password.forgot' }" class="c-btn c-btn--secondary c-btn--fullwidth">Reset your password</router-link>
    </form>
  </div>
</template>
<script>
import FormError from '@/components/FormError'
export default {
  name: 'login',
  components: {
    FormError
  },
  data () {
    return {
      loading: false,
      username: null,
      password: null,
      errorMessage: null,
      hasError: false,
      notVerified: false,
      verificationId: null,
      success: false,
      successMessage: null
    }
  }
}
</script>
