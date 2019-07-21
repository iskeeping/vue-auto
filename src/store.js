import Vue from 'vue'
import Vuex from 'vuex'
import storeTypes from '@/storeTypes'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sideStatus: false
  },
  mutations: {
    [storeTypes.updateSideStatus](state, payload) {
      state.sideStatus = payload.sideStatus
    }
  },
  actions: {
    [storeTypes.updateSideStatus](context, payload) {
      context.commit(storeTypes.updateSideStatus, payload)

    }
  }
})
export default store
