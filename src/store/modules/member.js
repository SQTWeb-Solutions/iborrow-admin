import axios from 'axios'

// actions
export const actions = {
  // action to save the new created user
  save ({commit}, data) {
    return axios.post('/api/admin/user', data)
  },
  async fetchMember ({commit}) {
    try {
      let { data } = await axios.get('api/admin/user')
      return data
    } catch (e) {
      console.log(e)
    }
  }
}
