import * as api from '../api'

const actions = { //행동하는것 + api호출같은 비동기로직.
  ADD_BOARD(_,{title}){
    return api.board.create(title)//프라미스리턴하고 미리 만든거래..
  },
  FETCH_BOARDS( {commit} ){
    return api.board.fetch().then(data=>{
      commit('SET_BOARDS',data.list)
    })
  },
  LOGIN({commit},{email,password}){
    return api.auth.login(email,password)
      .then(({accessToken})=>commit('LOGIN',accessToken))
  }
}
export default actions