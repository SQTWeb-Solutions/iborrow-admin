<template>
  <div class="col-md-12 u-nospace">
    <article class="c-plan">
      <content-placeholders>
        <content-placeholders-heading :img="false" />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </article>
  </div>
</template>
<script>
export default {
  name: 'delete-modal-loader'
}
</script>
