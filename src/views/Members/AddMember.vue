<template>
  <div class="container u-mt-medium">
    <div class="row">
      <div class="col-12">
        <div class="c-tabs">
          <ul class="c-tabs__list c-tabs__list--splitted nav nav-tabs" id="myTab" role="tablist">
              <li class="c-tabs__item"><a class="c-tabs__link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">{{this.$route.params.username ? 'Edit Info' : 'Add Info' }}</a></li>
          </ul>
          <div class="c-tabs__content tab-content" id="nav-tabContent">
            <div class="c-tabs__pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <form @submit.prevent="validateBeforeSubmit" method="post">
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
                        <strong>Error!</strong> <br />
                        {{errorMessage}}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                  </div>
                    <div class="col-lg-2 u-text-center">
                      <div class="c-avatar c-avatar--xlarge u-inline-block">
                      <!-- TODO: Show The user image here if preview the profile on edit -->
                        <img class="c-avatar__img" src="@/assets/img/avatar/avatar1.jpg" alt="Avatar">
                      </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="c-field u-mb-small">
                          <label class="c-field__label" for="firstname">First Name</label>
                          <input class="c-input" type="text" :class="{ 'c-input--danger': errors.has('firstname') }" v-model="firstname"  name="firstname" v-validate="'required'" placeholder="Jason">
                          <form-error :caption="errors.first('firstname')" v-if="errors.has('firstname')"></form-error>
                        </div>

                        <div class="c-field u-mb-small">
                          <label class="c-field__label" for="lastname">Last Name</label>
                          <input class="c-input" type="text" :class="{ 'c-input--danger': errors.has('lastname') }" v-model="lastname"  name="lastname" v-validate="'required'" id="lastname" placeholder="Clark">
                          <form-error :caption="errors.first('lastname')" v-if="errors.has('lastname')"></form-error>
                        </div>
                        <div class="c-field u-mb-small">
                            <label class="c-field__label" for="email">Role</label>
                            <select-two v-model="userrole">
                              <option v-for="role in roles"
                              :key="role.id" :value="role.value">{{role.role}} ({{role.description}})</option>
                            </select-two>
                            <form-error :caption="errors.first('userrole')" v-if="errors.has('userlastname')"></form-error>
                            <div class="c-note u-mb-small mt-1" >
                              <span class="c-note__icon">
                                <i class="feather icon-alert-octagon"></i>
                              </span>
                              <p>Set a default role permision for member, each roles has a certain permision attached to it.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="c-field u-mb-small">
                            <label class="c-field__label" for="email">E-mail Address</label>
                            <input class="c-input" :class="{ 'c-input--danger': errors.has('email') }" v-model="email"  name="email" v-validate="'required|email|uniqueEmail'" type="email" id="email" placeholder="jason@clark.com">
                            <form-error :caption="errors.first('email')" v-if="errors.has('email')"></form-error>
                        </div>
                        <div class="c-field u-mb-small">
                            <label class="c-field__label" for="username">Username</label>
                            <input class="c-input" :class="{ 'c-input--danger': errors.has('username') }" v-model="username"  name="username" v-validate="'required|alpha_num|uniqueUsername'" type="text" id="username" placeholder="jason@clark.com">
                            <form-error :caption="errors.first('username')" v-if="errors.has('username')"></form-error>
                        </div>
                    </div>
                    <div class="col-lg-8 offset-lg-2 mt-2">
                      <button class="c-btn c-btn--fancy" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : this.$route.params.username ? 'Edit Account' : 'Create account' }}</button>
                      <button class="c-btn c-btn--secondary" type="reset" >Cancel</button>
                    </div>
                </div>
              </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormError from '@/components/FormError'
import Roles from '@/resources/datas/roles'
import SelectTwo from '@/components/SelectTwo'
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
  name: 'member-profile',
  data () {
    return {
      roles: Roles,
      userrole: null,
      username: null,
      firstname: null,
      lastname: null,
      email: null,
      loading: false,
      errorMessage: null,
      hasError: false
    }
  },
  components: {
    FormError,
    SelectTwo
  },
  methods: {
    ...mapActions('member', {
      attemptRegister: 'save'
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
            roles: this.userrole
          }
          return this.attemptRegister(data)
            .then((res) => {
              this.$toastr.s(res.data.message)
              this.$router.push({ name: 'members.all' })
            })
            .catch(err => {
              this.loading = false
              this.hasError = true
              console.log(err)
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
