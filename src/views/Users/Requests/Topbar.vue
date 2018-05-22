<template>
  <div class="c-toolbar u-mb-medium">
      <h3 class="c-toolbar__title has-divider">All Requests</h3>
      <h5 class="c-toolbar__meta u-mr-auto">{{counted}} Requests</h5>
      <div class="c-dropdown dropdown">
          <a class="c-btn c-btn--secondary has-dropdown dropdown-toggle" href="#" id="dropdwonMenuProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Request
          </a>

          <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuProjects">
              <a class="c-dropdown__item" href="#!">New Requests</a>
              <a class="c-dropdown__item" href="#!">Active Requests</a>
              <a class="c-dropdown__item" href="#!">Expired Reqeust</a>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'request-top-bar',
  props: {
    counted: {
      type: Number
    }
  }
}
</script>
