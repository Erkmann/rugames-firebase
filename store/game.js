export const state = () => ({
    game: {
        nome: '',
        empresa: '',
        imagem: '',
        ano: '',
        index: ''
    },
    games: []
  })
  
export const mutations = {
    setGame(state, newGame) {
        state.game = newGame
    },

    addGame(state, game) {
        state.games.push(game)
    },
    deleteGame(state, index) {
        state.games.splice(index, 1)
    }
}