export const userNameInitState = ({commit}) => {
  commit('USER_NAME_INIT')
}

export const changeUserName = ({commit}, value) => {
  commit('CHANGE_USER_NAME', value)
}
