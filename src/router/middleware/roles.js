/*
* The middleware to check if the user an admin
* the middleware takes 3 paramtters
* [to] parametter for the url which the user is actually accessing
* [from] parameter from where te user is coming from
* [next] next is the action to be fired after checking successfully or failed
 */
import store from '@/store'
// The middleware will check if the user is an admin
export default async (to, from, next, meta) => {
  const role = store.getters['auth/roles']
  const roles = to.meta.roles
  if (roles.includes(role)) {
    next()
  } else {
    next({ name: 'unauthorised' })
  }
}
