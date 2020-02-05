const getters = {//state국룰
  isAuth(state){
    if(state.token) return true
    else return false
  }
}

export default getters