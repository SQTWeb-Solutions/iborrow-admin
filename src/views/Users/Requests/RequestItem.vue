<template>
  <div class="col-sm-12 col-md-6">
      <div class="c-project-card c-project u-mb-medium">
          <div class="c-project-card__content">
              <div class="c-project-card__head">
                <div class="o-media u-mb-small">
                    <div class="o-media__img u-mr-xsmall">
                        <div class="c-avatar c-avatar--xsmall">
                            <img class="c-avatar__img" src="@/assets/img/avatar/avatar1.jpg" alt="Profile Title">
                        </div>
                    </div>
                    <div class="o-media__body">
                        <h6 class="u-text-small u-mb-zero">Steven Robinson</h6>
                        <p class="u-text-mute u-text-xsmall">Company CTO</p>
                    </div>
                </div>
                  <h4 class="c-project-card__title">My Loan title</h4>
                  <p class="c-project-card__info">My small loan content to explain lorem lypsum text here whcich can just go into two or three lines and jst collpases from there</p>
              </div>
              <div class="pl-3 pr-3 pt-1">
                <div class="c-progress c-progress--info ">
                    <div class="c-progress__bar" style="width:45%;"></div>
                </div>
              </div>
              <div class="c-project-card__meta">
                  <p>9,680 NGN<small class="u-block u-text-mute">Budget </small></p>
                  <p>2,000 NGN<small class="u-block u-text-mute">Completed</small></p>
              </div>
              <div class="d-block">
                <div class="c-project__team">
                    <a class="c-project__profile c-tooltip c-tooltip--top" aria-label="Joseph Mullins" href="#">
                      <div class="c-avatar c-avatar--small"><span class="c-avatar__name">QA</span></div>
                    </a>

                    <a class="c-project__profile c-tooltip c-tooltip--top" aria-label="Stella Munoz" href="#">
                      <div class="c-avatar c-avatar--small"><span class="c-avatar__name">JD</span></div>
                    </a>

                    <a class="c-project__profile c-tooltip c-tooltip--top" aria-label="Una Higgins" href="#">
                      <div class="c-avatar c-avatar--small"><span class="c-avatar__name">MD</span></div>
                    </a>

                    <a class="c-project__profile c-tooltip c-tooltip--top" aria-label="Dylan Shelton" href="#">
                      <div class="c-avatar c-avatar--small"><span class="c-avatar__name">QA</span></div>
                    </a>
                </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'request-item'
}
</script>
