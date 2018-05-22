<template>
  <div class="container u-mt-medium">
      <div class="row u-mb-large">
          <div class="col-12">
              <div class="c-tabs">

                  <ul class="c-tabs__list c-tabs__list--splitted nav nav-tabs" id="myTab" role="tablist">
                      <li class="c-tabs__item"><router-link :to="{ name: 'profile.edit' }" class="c-tabs__link" >Personal Info</router-link></li>

                      <li class="c-tabs__item"><router-link :to="{ name: 'profile.security' }" class="c-tabs__link" >Seurity Settings</router-link></li>
                  </ul>
                  <div class="c-tabs__content tab-content" id="nav-tabContent">
                      <router-view></router-view>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'édit-profile'
}
</script>
