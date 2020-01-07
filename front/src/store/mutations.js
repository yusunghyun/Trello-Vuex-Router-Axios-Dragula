import {setAuthInHeader} from '../api'

const mutations = { //변화하는것//state국룰
  SET_IS_ADD_BOARD (state, toggle){ //토글은 내가 넣을 거.
    state.isAddBoard = toggle
  },
  SET_BOARDS(state,boards){
    state.boards = boards
  },
  LOGIN(state,token){
    if(!token) return 
    state.token = token
    localStorage.setItem('token',token)
    setAuthInHeader(token)
  },
  LOGOUT(state){
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  },
}
export default mutations