<template>
  <div class="col-xl-3 u-p-zero">
      <aside class="c-panel u-hidden-down@desktop">
          <div class="c-panel__widget">
              <h4 class="c-panel__title">Summary</h4>
              <summary-list></summary-list>
              <summary-list></summary-list>
          </div>
          <div class="c-panel__widget">
            <h4 class="c-panel__title">Expiring Requests</h4>
            <expiring-list></expiring-list>
            <expiring-list></expiring-list>
            <expiring-list></expiring-list>
          </div>
      </aside>
  </div>
</template>

<script>
import ExpiringList from '@/components/Users/ExpiringList'
import SummaryList from '@/components/Users/SummaryList'
export default {
  name: 'sidebard',
  components: {
    ExpiringList,
    SummaryList
  }
}
</script>
