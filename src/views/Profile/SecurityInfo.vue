<template>
   <div class="c-tabs__pane active" >
      <div class="row">
          <div class="col-lg-12">
              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="firstNameOther">Current Password</label>
                  <input class="c-input" type="text" id="firstNameOther" placeholder="Jason">
              </div>

              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="lastNameOther">New Password</label>
                  <input class="c-input" type="text" id="lastNameOther" placeholder="Clark">
              </div>
              <div class="c-field u-mb-small">
                  <label class="c-field__label" for="lastNameOther">Confirm Password</label>
                  <input class="c-input" type="text" id="lastNameOther" placeholder="Clark">
              </div>

          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'security-info'
}
</script>
