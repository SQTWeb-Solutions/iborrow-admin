<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-center flex-column text-center mb-5">
      <img src="@/assets/img/tail-spin.svg" />
      <p class="mt-2 mb-3">{{title}} ...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-spinner',
  props: {
    title: {
      type: String
    }
  }
}
</script>
