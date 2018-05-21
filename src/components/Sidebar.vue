<template>
  <div class="o-page__sidebar js-page-sidebar">
    <nav class="c-sidebar">
      <router-link :to="{ name: 'dashboard' }" tag="a" class="c-sidebar__brand" >
          <img class="c-sidebar__brand-img" src="@/assets/img/logo.png" alt="Logo"> iBorrow
      </router-link>
        <h4 class="c-sidebar__title">Quick Link</h4>
        <ul class="c-sidebar__list">
          <li class="c-sidebar__item">
            <a class="c-sidebar__link is-active" href="#">
              <i class="feather icon-monitor u-mr-xsmall"></i>Overview
            </a>
          </li>
          <li class="c-sidebar__item">
            <a class="c-sidebar__link is-active" href="#">
              <i class="feather icon-monitor u-mr-xsmall"></i>Analytics
            </a>
          </li>
          <li class="c-sidebar__item">
            <a class="c-sidebar__link is-active" href="#">
              <i class="feather icon-monitor u-mr-xsmall"></i>Transactions
            </a>
          </li>
        </ul>
        <h4 class="c-sidebar__title">Apps</h4>
        <ul class="c-sidebar__list">
          <li class="c-sidebar__item">
            <a class="c-sidebar__link" target="_blank" href="boards.html">
              <i class="fa fa-hand-paper-o u-mr-xsmall"></i>Boards (CRM)
            </a>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
