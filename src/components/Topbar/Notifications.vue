<template>
  <div class="c-dropdown u-hidden-down@mobile" :class="{'u-mr-medium': lastItem, 'u-ml-small': !firstItem}">
    <a class="c-notification dropdown-toggle" href="#" :id="dropdownToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="c-notification__icon">
        <i class="feather" :class="icon"></i>
      </span>
      <span class="c-notification__number" v-if="count">{{count}}</span>
    </a>

    <div class="c-dropdown__menu c-dropdown__menu--large dropdown-menu dropdown-menu-right" :aria-labelledby="dropdownToggle">
      <notification-item v-for="item in items"
      :key="item.id"
      :title="item.title"
      :content="item.content"
      :meta="item.meta"></notification-item>
      <a href="#" class="c-dropdown__item dropdown-item text-center" v-if="!count">
        <p>No notification this time</p>
      </a>
    </div>
  </div>
</template>

<script>
import NotificationItem from './NotificationItem'
export default {
  name: 'notifications',
  data () {
    return {
      count: (this.items) ? this.items.length : false // check if the item exist at all if not then set the count to null/false
    }
  },
  components: {
    NotificationItem
  },
  props: {
    dropdownToggle: {
      type: String
    },
    lastItem: {
      type: Boolean,
      default: false
    },
    firstItem: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'icon-bell'
    },
    items: {
      type: Array,
      defalt: {}
    }
  }
}
</script>
