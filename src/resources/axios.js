import axios from 'axios'
import store from '@/store'
import router from '@/router'

// default axios information
axios.defaults.baseURL = process.env.VUE_APP_PROXY_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Function to log user out of the application if the token expired
async function logout () {
  try {
    await store.dispatch('auth/logout')
    this.$toastr.i('Your authentication token has expired, please login again', 'Account Logged Out')
    router.push({
      name: 'login'
    })
  } catch (e) {
    console.log(e)
  }
}

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const {
    status
  } = error.response

  if (status >= 500) {
    console.log(error.message)
  }

  if (status === 401 && store.getters['auth/check']) {
    // TODO: Change the option here to display an error message for the user to see before loggin out
    logout()
  }

  return Promise.reject(error)
})
