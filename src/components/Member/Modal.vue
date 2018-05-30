<template>
  <div class="c-modal modal fade" ref="deleteMemberModal" tabindex="-1" role="dialog" aria-labelledby="standard-modal" data-backdrop="static">
      <div class="c-modal__dialog modal-dialog" role="document">
          <div class="c-modal__content">
              <div class="c-modal__header">
                  <h3 class="c-modal__title">This is the modal title</h3>
                  <span class="c-modal__close" data-dismiss="modal" aria-label="Close">
                      <i class="feather icon-x"></i>
                  </span>
              </div>
              <div class="c-modal__subheader">
                  <p>This is the sub header title</p>
              </div>
              <div class="c-modal__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, ratione quibusdam? Consequuntur natus praesentium adipisci eos, reiciendis distinctio error nostrum animi quos hic perferendis eius fugiat fuga sunt fugit deserunt!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eveniet modi excepturi error nesciunt cupiditate tempora deserunt perspiciatis exercitationem, suscipit temporibus officia sit recusandae autem iure vero neque quia consequatur!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, ratione quibusdam? Consequuntur natus praesentium adipisci eos, reiciendis distinctio error nostrum animi quos hic perferendis eius fugiat fuga sunt fugit deserunt!</p>
              </div>
              <div class="c-modal__footer">
                  <p>This is the modal footer</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'delete-modal',
  props: {
    member: {
      type: String
    }
  },
  mounted () {
    // eslint-disable-next-line
    $(this.$refs.deleteMemberModal).modal('show')
  }
}
</script>
