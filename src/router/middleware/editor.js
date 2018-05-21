/*
* The middleware to check if the user an editor
* the middleware takes 3 paramtters
* [to] parametter for the url which the user is actually accessing
* [from] parameter from where te user is coming from
* [next] next is the action to be fired after checking successfully or failed
 */
import store from '@/store'
// The middleware will check if the user is an eitor
export default async (to, from, next) => {
  console.log('here')

  const roles = store.getters['auth/roles']
  switch (roles) {
    case 'editor':
      next()
      break
    default:
      next()
      break
  }
}
