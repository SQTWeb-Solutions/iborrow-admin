import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  token: Cookies.get('token'),
  roles: Cookies.get('roles')
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  roles: state => state.roles,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  // mutation to save the generated token for the user from jwt on server
  [types.SAVE_TOKEN] (state, { token, roles, remember }) {
    state.token = token
    state.roles = roles
    Cookies.set('token', token, { expires: remember ? 365 : null })
    Cookies.set('roles', roles, { expires: remember ? 365 : null })
  },
  // fer user information from the token from the server
  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },
  // if the fetch user fails then set the user state to logout and relogin again
  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    state.roles = null
    Cookies.remove('token')
    Cookies.remove('roles')
  },
  // log user out and reset the token to null for the moment the user is accessing the server
  [types.LOGOUT] (state) {
    state.user = null
    state.token = null
    state.roles = null
    Cookies.remove('token')
    Cookies.remove('roles')
  },
  // update the user info after the user has successfully update profile
  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  // action to save the token generated into a temporary variable
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },
  // action to log the user in on the server and fetch the user data
  login ({dispatch}, details) {
    return axios.post('/api/auth/signin', details)
      .then(res => dispatch('saveToken', {
        token: res.data.token,
        roles: res.data.roles,
        remember: true
      }))
  },
  // create the admin account alone here
  register ({commit}, details) {
    return axios.post('/api/admin/create', details)
  },
  // ajax request to check the logged in user information
  async fetchUser ({ commit }) {
    try {
      // TODO: Connect to API to fecth the logged in user
      const { data } = await axios.get('/api/users/me')
      commit(types.FETCH_USER_SUCCESS, { user: data })
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  },
  // update the user information on save
  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },
  // asynch to loged out user
  async logout ({ commit }) {
    try {
      await axios.post('/api/auth/signout')
    } catch (e) { }
    commit(types.LOGOUT)
  }
}
