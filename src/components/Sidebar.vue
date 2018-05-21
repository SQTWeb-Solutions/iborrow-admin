<template>
  <div class="o-page__sidebar js-page-sidebar">
    <nav class="c-sidebar">
      <router-link :to="{ name: 'dashboard' }" tag="a" class="c-sidebar__brand" >
          <img class="c-sidebar__brand-img" src="@/assets/img/logo.png" alt="Logo"> iBorrow
      </router-link>
      <div class="pl-3 pr-3" v-if="!rendered">
          <content-placeholders :rounded="true">
              <content-placeholders-heading />
              <content-placeholders-text :lines="3" />
              <content-placeholders-text :lines="4" />
          </content-placeholders>
      </div>
      <navigation-link @rendered="onRenderChild"></navigation-link>

    </nav>
  </div>
</template>

<script>
import NavigationLink from './NavigationLink'
export default {
  name: 'sidebar',
  components: {
    NavigationLink
  },
  data () {
    return {
      rendered: false
    }
  },
  methods: {
    onRenderChild (value) {
      this.rendered = true
    }
  }
}
</script>
