<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 col-xl-9 u-p-zero">
              <topbar></topbar>
              <div class="row u-m-small">
                <request-item></request-item>
                <request-item></request-item>
                <request-item></request-item>
                <request-item></request-item>
                <request-item></request-item>
                <request-item></request-item>
              </div>
          </div>
          <sidebar></sidebar>
      </div>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import RequestItem from './RequestItem'
export default {
  name: 'borrowers-request-view',
  components: {
    Topbar,
    Sidebar,
    RequestItem
  }
}
</script>
