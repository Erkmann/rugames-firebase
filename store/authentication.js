export const state = () => ({
    user: {},
    logged: false
})
  
export const mutations = {
    setUserStore(state, newUser) {
        state.user = newUser
    },
    setLogado(state, newLogado) {
        state.logged = newLogado
    }
}