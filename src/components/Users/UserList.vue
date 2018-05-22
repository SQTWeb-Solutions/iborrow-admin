<template>
  <div class="col-md-6">
      <div class="c-search-result">
          <div class="o-media">
              <div class="o-media__img u-mr-small">
                  <div class="c-avatar c-avatar--medium">
                      <img class="c-avatar__img" src="@/assets/img/avatar/avatar2.jpg" alt="Adam's Face">
                  </div>
              </div>
              <div class="o-media__body">
                  <h4 class="c-search-result__title">Caroline Higgins <span class="text-muted">@carolina</span></h4>
                  <p class="c-search-result__meta">Investor <br> 5 Transactions  | 41 Lendings</p>
              </div>
          </div>

          <div class="d-flex justify-content-between mt-3">
              <a href="#" class="c-btn c-btn--info">
                  <i class="feather icon-user u-mr-xsmall u-opacity-heavy"></i>View Profile
              </a>

              <div class="c-btn c-btn--secondary u-color-success">
                  <i class="feather icon-check u-mr-xsmall"></i>Available for Lend
              </div>
          </div>

          <ul class="c-search-result__actionlist">
              <li class="c-search-result__action">
                  <a href="#"><i class="feather icon-trash"></i></a>
              </li>

              <li class="c-search-result__action dropdown">
                <a class="dropdown-toggle" href="#" id="searchResult1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical"></i></a>
                <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="searchResult1">
                  <a href="#" class="c-dropdown__item">View Profile</a>
                  <a href="#" class="c-dropdown__item">View Activities</a>
                  <a href="#" class="c-dropdown__item">View Transactions</a>
                </div>
              </li>
          </ul>

      </div>
  </div>
</template>

<script>
export default {
  name: 'user-list'
}
</script>
