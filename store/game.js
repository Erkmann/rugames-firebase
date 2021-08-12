export const state = () => ({
    game: {
        nome: '',
        empresa: '',
        imagem: '',
        ano: '',
        index: '',
        id: ''
    },
  })
  
export const mutations = {
    setGame(state, newGame) {
        state.game = newGame
    }
}