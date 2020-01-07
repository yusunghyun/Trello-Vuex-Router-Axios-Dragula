const getters = {//state국룰
  isAuth(state){
    return !!state.token
  }
}

export default getters