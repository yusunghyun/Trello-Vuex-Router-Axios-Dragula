import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//여기가 센터(등록하는곳) 새로운언어의 function이라고 생각ㄱㄱ 전역지정
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

const {accessToken} = localStorage
store.commit('LOGIN',{accessToken})

export default store