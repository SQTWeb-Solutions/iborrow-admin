// import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  id: Cookies.get('registeredUserId')
}

// getters
export const getters = {
  user: state => state.user,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_ID] (state, { id, remember }) {
    state.id = id
    Cookies.set('registeredUserId', id, { expires: remember ? 365 : null })
  },
  // update the user info after the user has successfully update profile
  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  // update the user information on save
  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  }
}
