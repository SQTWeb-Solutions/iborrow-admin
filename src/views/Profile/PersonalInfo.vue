<template>
  <div class="c-tabs__pane active" >
      <div class="row">
          <div class="col-lg-2 u-text-center">
              <div class="c-avatar c-avatar--xlarge u-inline-block">
                <span class="c-avatar__name">QA</span>
              </div>

              <a class="u-block u-color-primary" href="#">Edit Avatar</a>
          </div>
          <div class="col-lg-5">
              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="firstName">First Name</label>
                  <input class="c-input" type="text" id="firstName" placeholder="Jason">
              </div>

              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="lastName">Last Name</label>
                  <input class="c-input" type="text" id="lastName" placeholder="Clark">
              </div>
          </div>
          <div class="col-lg-5">
              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="email">E-mail Address</label>
                  <input class="c-input" id="email" readonly disabled type="email" placeholder="jason@clark.com">
              </div>
              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="email">Username</label>
                  <input class="c-input" id="email" type="email" placeholder="jason@clark.com">
              </div>
          </div>
          <div class="col-lg-8 offset-lg-2 mt-2">
            <button class="c-btn c-btn--info" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : 'Update account' }}</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'peronal-info'
}
</script>
