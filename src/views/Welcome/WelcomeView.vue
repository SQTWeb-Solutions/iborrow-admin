<template>
<div id="welcome-page">
  <div class="d-flex justify-content-center align-items-center spinner-container flex-column">
    <img src="@/assets/img/tail-spin.svg" />
    <div class="row mt-5">
      <div class="col-12">
        <div class="wdt-loading-screen">

            <div class="wdt-loading-phrases">

                <div class="wdt-loading-phrase-category" data-category="default">
                    <div class="wdt-loading-phrase">Borrow money from verified member ...</div>
                    <div class="wdt-loading-phrase">Lend money to verified member ...</div>
                    <div class="wdt-loading-phrase">Request investment on your business ...</div>
                    <div class="wdt-loading-phrase">Invest on others business ...</div>
                    <div class="wdt-loading-phrase">All on iBorrow ...</div>
                </div>

            </div>

        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-end logo-container">
    <img src="@/assets/img/logo_30px.png" alt="Sprngo" class="img-fluid" />
  </div>

</div>
</template>
<script>
import wdtLoading from '@/assets/scripts/wtdloading.js'
import Cookies from 'js-cookie'

export default {
  name: 'welcome-page',
  methods: {
    /*
    * Check if user is logged in,
    * Parameters [$store.getters]
     */
    checkUserStatus () {
      Cookies.remove('token')
      Cookies.remove('roles')
      Cookies.remove('onboard')
      if (!this.$store.getters['auth/token']) {
        this.$router.push({ name: 'auth.login' })
      } else {
        // const roles = this.$store.getters['auth/roles']
        const onboardStatus = this.$store.getters['auth/onboard']
        if (!onboardStatus || onboardStatus === 'false') {
          this.$router.push({ name: 'onboard.page' })
        } else {
          this.$router.push({ name: 'dashboard' })
        }
      }
    }
  },
  mounted () {
    // eslint-diable-next-line
    wdtLoading.start()
    setTimeout(() => {
      this.checkUserStatus()
    }, 3000)
  }
}
</script>
