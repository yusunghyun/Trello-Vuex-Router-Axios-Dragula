const getters = {
  isAuth(state) {
    return !!state.me
  },
}

export default getters