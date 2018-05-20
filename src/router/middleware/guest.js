/*
* The middleware to check if the user  is already logged and the token existed for the user
* the middleware takes 3 paramtters
* [to] parametter for the url which the user is actually accessing
* [from] parameter from where te user is coming from
* [next] next is the action to be fired after checking successfully or failed
 */
import store from '@/store'

export default (to, from, next) => {
  if (store.getters['auth/token']) {
    next({ name: 'landing-page' })
  } else {
    next()
  }
}
