<template>
  <small class="c-field__message u-color-danger">
    <i class="feather icon-x u-color-danger"></i> {{caption}}
  </small>
</template>

<script>
export default {
  name: 'form-error',
  props: {
    caption: {
      type: String
    }
  }
}
</script>
