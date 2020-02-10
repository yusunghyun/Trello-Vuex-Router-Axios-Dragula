import {setAuthInHeader} from '../api'

const mutations = { //변화하는것//state국룰
  SET_IS_ADD_BOARD (state, toggle){ //토글은 내가 넣을 거.
    state.isAddBoard = toggle
  },
  LOGIN (state, {accessToken}) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken
    setAuthInHeader(accessToken)
  },
  LOGOUT (state) {
    state.accessToken = null 
    delete localStorage.accessToken
    setAuthInHeader(null)
  },
  SET_BOARDS(state,boards){
    state.boards = boards
  },
  SET_BOARD(state,Board){
    state.board = Board.item
  },
  SET_CARD(state,card){
    state.card=card
  },
  SET_THEME (state,color){ //바디,navbar 배경을 바꿔주는 함수
    state.bodyColor = color || '#ffffff',
    state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026aa7'
  },
  SET_IS_SHOW_BOARD_SETTINGS(state,toggle){
    state.isShowBoardSettings = toggle
  },
}
export default mutations