<template>
  <div class="c-counter-nav__item" :class="{'u-hidden-down@tablet': !active}">
      <a class="c-counter-nav__link text-capitalize" href="#" :class="{'is-active': active}">
        <span class="c-counter-nav__counter">{{total}}</span> {{title}}
      </a>
  </div>
</template>

<script>
// TODO: Fix the router link to user type when clicked
export default {
  name: 'member-counter',
  props: {
    title: {
      type: String
    },
    total: {
      type: Number
    },
    active: {
      type: Boolean
    }
  }
}
</script>
