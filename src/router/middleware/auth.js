/*
* The middleware to check if the user is not logged in
* the middleware takes 3 paramtters
* [to] parametter for the url which the user is actually accessing
* [from] parameter from where te user is coming from
* [next] next is the action to be fired after checking successfully or failed
 */
import store from '@/store'
// The middleware will check if the user is logged in
export default async (to, from, next) => {
  if (!store.getters['auth/token']) {
    next({ name: 'auth.login' })
  } else {
    const roles = store.getters['auth/roles']
    switch (roles) {
      // check if the user is not any of the following user type
      case 'investors': case 'borrowers': case 'users': case 'user':
        store.dispatch('auth/logout')
        // TODO: Redirect the user here if not on role admin/editor/moderator
        next({ name: 'auth.login' })
        break
      default:
        next()
        break
    }
    next()
  }
}
