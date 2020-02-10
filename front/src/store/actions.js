import * as api from '../api'

const actions = { //행동하는것 + api호출같은 비동기로직.
  LOGIN({commit},{email,password}){
    return api.auth.login(email,password)
      .then( ({ accessToken }) => commit('LOGIN',{accessToken} ) )
      .catch(err=>console.error(err))
  },
  JOIN({commit},{email,password}){
    return api.auth.join(email,password)
      .then(({accessToken })=>commit('LOGIN',{accessToken} ))
  },
  LOGOUT({commit}){
    return api.auth.logout()
      .then(()=>commit('LOGOUT',null))
  },
  ADD_BOARD (_, {title}) {
    return api.board.create(title).then(data => {
      return data.item})
  },
  FETCH_BOARDS( {commit} ){//보드목록패치
    return api.board.fetch().then(data=>{
      commit('SET_BOARDS',data.list)
    })
  },
  FETCH_BOARD({commit},{id}){//한개만 패치.
    
    return api.board.fetch(id).then((Board)=>{
      return commit('SET_BOARD',Board)
    })
  },//아래 함수 첫번째 인자는 컨텍스트
  DELETE_BOARD(_,{id}){
    return api.board.destroy(id)
  },
  UPDATE_BOARD({dispatch,state},{id,title,bgColor}){ //첫번째 인자는 디스패치와 컨텍스트르 ㄹ쓰기위해 한거임.
    return api.board.update(id,{title,bgColor})
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  ADD_LIST({dispatch,state},{title,BoardId,pos}){ //ctx안에 dispatch와 state있음
    return api.list.create({title,BoardId,pos})
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  UPDATE_LIST({dispatch,state},{id,pos,title}){
    return api.list.update(id,{pos,title})
    .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  DELETE_LIST({dispatch,state},{id}){
    return api.list.destroy(id)
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  ADD_CARD({dispatch,state},{title, ListId, pos}){
    return api.card.create(title,ListId,pos)
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  FETCH_CARD({commit},{id}){
    return api.card.fetch(id).then(data=>{
      commit('SET_CARD',data.item)
    })
  },
  UPDATE_CARD({dispatch,state},{id,title,description,pos,listId}){
    return api.card.update(id,{title,description,pos,listId})
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  },
  DELETE_CARD({dispatch,state}, {id}){
    return api.card.destroy(id)
      .then(()=>dispatch('FETCH_BOARD',{id:state.board.id}))
  }
}
export default actions