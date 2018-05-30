<template>
<div class="row">
  <div class="col-md-6 col-8 offset-2 offset-md-3">
    <div class="text-center mt-4 mb-4">
      <img src="@/assets/img/cloud-computing.svg" alt="Network Error Image" class="img-fluid img-square mb-3" />
      <h1 class="mb-3">No member's found on the database this time.</h1>
      <h6 class="mb-2">It seems you there not member registered on the system this time aside from you. Start simplifying roles by adding sub-admin account.</h6>
      <router-link :to="{ name: 'members.add' }" class="c-btn c-btn--info mt-4">
          <i class="feather icon-plus u-mr-xsmall u-opacity-heavy"></i>Add Member
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'empty-member-displat'
}
</script>
