<template>
<div>
  <ul class="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
    <li><a class="c-tabs__link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Activity</a></li>
    <li><a class="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Messages</a></li>
  </ul>
  <div class="c-tabs__content tab-content u-mb-large" id="nav-tabContent">
    <div class="c-tabs__pane active u-pb-medium" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p class="u-text-mute u-text-uppercase u-text-small u-mb-xsmall">Today</p>
      <div class="c-feed">
        <div class="c-feed__item c-feed__item--fancy">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <p class="c-feed__comment">Lorem lypsum text should goes here for anyone who need to read it and must be a very short text with ellipsis ...</p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
        <div class="c-feed__item c-feed__item--success">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <p class="c-feed__comment">Lorem lypsum text should goes here for anyone who need to read it and must be a very short text with ellipsis ...</p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
        <div class="c-feed__item c-feed__item--warning">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
      </div>
      <p class="u-text-mute u-text-uppercase u-text-small u-mb-xsmall">Yesterday</p>
      <div class="c-feed">
        <div class="c-feed__item c-feed__item--fancy">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <p class="c-feed__comment">Lorem lypsum text should goes here for anyone who need to read it and must be a very short text with ellipsis ...</p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
        <div class="c-feed__item c-feed__item--success">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <p class="c-feed__comment">Lorem lypsum text should goes here for anyone who need to read it and must be a very short text with ellipsis ...</p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
        <div class="c-feed__item c-feed__item--warning">
          <p>John Doe Confirmed Jane Doe Transaction <strong>House renting loan</strong></p>
          <span class="c-feed__meta">Loan Request - 9:24PM</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
