const getters = {
  isAuth(state) {
    
    return !!state.accessToken
  },
}

export default getters