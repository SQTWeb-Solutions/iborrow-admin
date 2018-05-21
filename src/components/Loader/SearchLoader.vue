<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="c-candidate">
        <content-placeholders>
          <content-placeholders-heading :img="true" />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-loader'
}
</script>
