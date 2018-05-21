<template>
  <div class="c-card u-mb-xsmall">
    <header class="c-card__header u-pt-large">
      <a class="c-card__icon" href="/">
        <img src="@/assets/img/logo.png" alt="iBorrow">
      </a>
      <h1 class="u-h3 u-text-center ">Register Admin?</h1>
    </header>
    <form class="c-card__body" @submit.prevent="validateBeforeSubmit" method="post">
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
          <strong>Error!</strong> <br />
          {{errorMessage}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
      </div>
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="firstname">Enter your Firstname</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('firstname') }" v-model="firstname"  name="firstname" v-validate="'required'" type="text" id="firstname" placeholder="clark@iborrow.com">
        <form-error :caption="errors.first('firstname')" v-if="errors.has('firstname')"></form-error>
      </div>
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="lastname">Enter your Lastname</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('lastname') }" v-model="lastname"  name="lastname" v-validate="'required'" type="text" id="lastname" placeholder="clark@iborrow.com">
        <form-error :caption="errors.first('lastname')" v-if="errors.has('lastname')"></form-error>
      </div>
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="email">Enter your email address</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('email') }" v-model="email"  name="email" v-validate="'required|email|uniqueEmail'" type="email" id="email" placeholder="clark@iborrow.com">
        <form-error :caption="errors.first('email')" v-if="errors.has('email')"></form-error>
      </div>
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="username">Enter your username</label>
        <input class="c-input" :class="{ 'c-input--danger': errors.has('username') }" v-model="username"  name="username" v-validate="'required|alpha_num|uniqueUsername'" type="text" id="username" placeholder="iborrow@admin">
        <form-error :caption="errors.first('username')" v-if="errors.has('username')"></form-error>
      </div>
      <div class="c-field u-mb-small">
        <label class="c-field__label" for="password">Password</label>
        <input class="c-input " type="password" id="password" v-model="password"  name="password" v-validate="'required'" :class="{ 'c-input--danger': errors.has('password') }" placeholder="Numbers, Letters...">
        <form-error :caption="errors.first('password')" v-if="errors.has('password')"></form-error>
      </div>
      <button class="c-btn c-btn--fancy c-btn--fullwidth" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : 'Create my account' }}</button>
      <span class="c-divider c-divider--small has-text u-mv-medium">Already Registere</span>
      <router-link tag="a" :to="{ name: 'auth.login' }" class="c-btn c-btn--secondary c-btn--fullwidth">Proceed to login</router-link>
    </form>
  </div>
</template>
<script>
import FormError from '@/components/FormError'
import { mapActions } from 'vuex'
import { Validator } from 'vee-validate'
import axios from 'axios'

const isUnique = (value) => {
  return axios.post('/api/auth/validate/email', { email: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
const isUniqueUsername = (value) => {
  return axios.post('/api/auth/validate/username', { username: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
Validator.extend('uniqueEmail', {
  validate: isUnique,
  getMessage: (field, params, data) => {
    return data.message
  }
})
Validator.extend('uniqueUsername', {
  validate: isUniqueUsername,
  getMessage: (field, params, data) => {
    return data.message
  }
})
export default {
  name: 'register-account',
  metaInfo () {
    return {
      title: 'Register Account'
    }
  },
  data () {
    return {
      username: null,
      password: null,
      firstname: null,
      lastname: null,
      email: null,
      loading: false,
      errorMessage: null,
      hasError: false
    }
  },
  components: {
    FormError
  },
  methods: {
    ...mapActions('auth', {
      attemptRegister: 'register'
    }),
    validateBeforeSubmit (e) {
      this.$validator.validateAll().then((result) => {
        this.loading = true
        if (result) {
          let data = {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            username: this.username,
            password: this.password
          }
          return this.attemptRegister(data)
            .then((res) => this.$router.push({ name: 'auth.login' }))
            .catch(err => {
              this.loading = false
              this.hasError = true
              this.errorMessage = err.response.data.message
            })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>
