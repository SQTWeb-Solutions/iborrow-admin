<template>
  <select class="c-select">
    <slot></slot>
  </select>
</template>

<script>
/* eslint-disable */
require('select2')

export default {
  name: 'select-two',
  mounted: function () {
    var vm = this
    $(this.$el)
      .val(this.value)
      // init select2
      .select2({ data: this.options })
      // emit event on change.
      .on('change', function () {
        vm.$emit('input', this.value)
      })
  },
  watch: {
    value: function (value) {
      // update value
      $(this.$el).val(value)
    },
    options: function (options) {
      // update options
      $(this.$el).select2({ data: options })
    }
  },
  destroyed: function () {
    $(this.$el).off().select2('destroy')
  },
  props: ['options', 'value']
}
</script>
