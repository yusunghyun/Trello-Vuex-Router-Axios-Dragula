import * as api from '../api'

const actions = { //행동하는것 + api호출같은 비동기로직.
  LOGIN({commit},{email,password}){
    return api.auth.login(email,password)
      .then(({accessToken})=>commit('LOGIN',accessToken))
  },
  ADD_BOARD(_,{title}){
    return api.board.create(title).then(data=>data.item)//프라미스리턴하고 미리 만든거래..
  },
  FETCH_BOARDS( {commit} ){//보드목록패치
    return api.board.fetch().then(data=>{
      commit('SET_BOARDS',data.list)
    })
  },
  FETCH_BOARD({commit},{id}){//한개만 패치.
    return api.board.fetch(id).then(data=>{
      commit('SET_BOARD',data.item)
    })
  },
}
export default actions