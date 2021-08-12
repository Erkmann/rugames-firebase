export const state = () => ({
    user: {},
    logged: false
})
  
export const mutations = {
    setUser(state, newUser) {
        state.user = newUser
    }
}