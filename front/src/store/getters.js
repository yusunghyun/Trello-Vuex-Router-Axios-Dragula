const getters = {//state국룰
  isAuth(state){
    return !!state.user
  }
}

export default getters