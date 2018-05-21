<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="c-candidate">
      <div class="c-candidate__info pt-1">
          <div class="c-candidate__avatar">
              <img src="@/assets/img/avatar/avatar2.jpg" alt="Candiates's Avatar">
          </div>

          <div class="c-candidate__meta">
              <h3 class="c-candidate__title">Mathilda Campbell
                  <span class="c-candidate__country">
                      <i class="feather icon-user"></i> Moderator
                  </span>
              </h3>

              <div class="c-candidate__actions">
                  <a href="#"><i class="feather icon-trash"></i></a>
                  <a href="#"><i class="feather icon-settings"></i></a>
              </div>
          </div>
      </div>
      <div class="c-candidate__footer">
          <a href="#" class="c-btn c-btn--info">
              <i class="feather icon-message-square u-mr-xsmall u-opacity-heavy"></i>New Message
          </a>
          <a href="#" class="c-btn c-btn--primary">
              <i class="feather icon-users u-mr-xsmall u-opacity-heavy"></i>View Info
          </a>
      </div><!-- // .c-candidate__footer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'member-list'
}
</script>
