const getDefaultState = () => {
  return {
    nickName:'',
    avatarUrl:'',
    city:'',
    country:'',
    language:''
  }
}

const state = getDefaultState()

const mutations = {
  SAVE_USER_WX_INFO: (state, data) => {
    state.avatarUrl= data.avatarUrl
    state.nickName = data.nickName
    state.city = data.city
    state.country = data.country
    state.language = data.language
  },

}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

