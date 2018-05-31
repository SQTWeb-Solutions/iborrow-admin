<template>
  <div class="c-modal c-modal--xlarge fade" ref="deleteMemberModal" tabindex="-1" role="dialog" aria-labelledby="standard-modal">
    <div class="c-modal__dialog modal-dialog" role="document">
        <div class="modal-content">
          <header class="c-modal__header">
            <h1 class="c-modal__title">Confirm Action</h1>
            <a class="c-modal__close" data-dismiss="modal" aria-label="Close" href="#" @click="closeModal">
              <i class="feather icon-x fa"></i>
            </a>
          </header>
          <div class="c-modal__body u-pb-small">
            <div class="row ">
              <div class="col-sm-12">
                <h2 class="u-h5 u-mb-small">Are you sure you want to delete the member account?</h2>
                <p class="u-text-mute u-mb-xsmall">Deleting a member will completing remove the member account from the database and leave all information concerning the member as unassigned.</p>
              </div>
            </div>
            <h5 class="mb-3 mt-2">User information</h5>
            <div class="row" v-if="loaded">
              <div class="col-sm-12 col-md-12 u-nospace">
                <article class="c-plan">
                  <h5 class="c-plan__title u-text-capitalize">ROLE: {{deletingMember.roles[0]}}</h5>
                  <h4 class="c-plan__price">
                  {{deletingMember.displayName}}</h4>
                  <span class="c-plan__divider"></span>
                  <ul>
                    <li class="c-plan__feature">
                        <span>Email:</span> {{deletingMember.email}}
                    </li>
                    <li class="c-plan__feature">
                        <span>USername</span> {{deletingMember.username}}
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div class="row" v-else>
              <modal-loader></modal-loader>
            </div>
          </div>
          <footer class="c-modal__footer ">
            <button class="c-btn c-btn--secondary" type="button" @click.prevent="closeModal">Cancel</button>
            <button class="c-btn c-btn--green" @click.prevent="deleteMemberAction">Delete Member</button>
          </footer>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ModalLoader from '@/components/Loader/ModalLoader'
export default {
  name: 'delete-modal',
  data () {
    return {
      loaded: false,
      error: false,
      deletingMember: []
    }
  },
  components: {
    ModalLoader
  },
  props: {
    member: {
      type: String
    },
    memberIndex: Number
  },
  mounted () {
    // eslint-disable-next-line
    $(this.$refs.deleteMemberModal).modal('show')
    // Get the click member for delete
    this.getDeletingMember(this.member)
      .then(member => {
        /** Check if the member is empty or has content */
        if (member === null) {
          this.error = true
        }
        this.deletingMember = member
        this.loaded = true
      })
      .catch(error => this.$toastr.e(error.message))
  },
  methods: {
    ...mapActions('member', {
      getDeletingMember: 'deletingMember',
      deleteMember: 'deleteMember'
    }),
    closeModal () {
      let vm = this // bing this in the context
      // Rest the data back to normal on destroy of the modal
      vm.loaded = false
      vm.error = false
      vm.deletingMember = []
      // eslint-disable-next-line
      $(this.$refs.deleteMemberModal).modal('hide')
      vm.$emit('close-modal')
    },
    deleteMemberAction () {
      this.deleteMember(this.member)
        .then(res => {
          this.$emit('remove-member', this.memberIndex)
          this.$toastr.s(res.message)
          this.closeModal()
        })
        .catch(error => this.$toastr.e(error.message))
    }
  }
}
</script>
