<template>
<div class="c-feed__item has-icon">
  <i class="c-feed__item-icon u-bg-fancy feather" :class="icon"></i>
  <p>{{content}}</p>
  <span class="c-feed__meta">{{title}}</span>
</div>
</template>
<script>
export default {
  name: 'profile-feed',
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>
