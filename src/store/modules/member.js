import axios from 'axios'

// actions
export const actions = {
  // action to save the new created user
  save ({commit}, data) {
    return axios.post('/api/admin/user', data)
  },
  async getMemberById ({commit}, id) {
    try {
      let {data} = await axios.get(`api/admin/user/${id}`)
      return data
    } catch (e) {
      console.log(e)
    }
  },
  // get all added members
  async fetchMember ({commit}) {
    try {
      let { data } = await axios.get('api/admin/user')
      return data
    } catch (e) {
      console.log(e)
    }
  },
  // get the member roles and its associated countes of member
  async fetchMemberCount ({commit}) {
    try {
      let {data} = await axios.get('api/admin/users/count')
      return data
    } catch (e) {
      console.log(e)
    }
  },
  // get the informatio of the member to delete
  async deletingMember ({commit}, payload) {
    try {
      let { data } = await axios.get(`api/admin/user/${payload}`)
      return data
    } catch (e) {
      console.log(e)
    }
  },
  // delete the member
  async deleteMember ({commit}, payload) {
    try {
      let { data } = await axios.delete(`api/admin/user/${payload}`)
      return data
    } catch (e) {
      console.log(e)
    }
  }
}
