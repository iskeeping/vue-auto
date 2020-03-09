import Vue from 'vue'
import Vuex from 'vuex'
import storeTypes from '@/storeTypes'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sideStatus: false,
    userInfo: {}
  },
  mutations: {
    [storeTypes.updateSideStatus](state, payload) {
      state.sideStatus = payload.sideStatus
    },
    [storeTypes.setUserInfo](state, payload) {
      state.userInfo = payload.userInfo
    }
  },
  actions: {
    [storeTypes.updateSideStatus](context, payload) {
      context.commit(storeTypes.updateSideStatus, payload)

    },
    [storeTypes.setUserInfo](context, payload) {
      context.commit(storeTypes.setUserInfo, payload)

    }
  }
})
export default store
