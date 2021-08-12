export default {
  data() {
    return {
      games: [],
			addModal: {
        show: false,
        nome: "",
        empresa: "",
        imagem: "",
        ano: "",
      },
    }
  },
  methods: {
    async getGames() {
			this.games = []
      let games = this.$fire.firestore.collection("games");
      try {
				let getGames = await games.get();
				getGames.forEach((game) => {
					this.games.push({id: game.id, ...game.data()});
				});
			} catch (e) {
				console.log(e);
				this.$toast.error("Nao foi possivel carregar os games");
			}
		},
		clearModalAdd() {
      this.addModal = {
        show: false,
        nome: "",
        empresa: "",
        imagem: "",
        ano: "",
      };
    },
    submitAdd() {
      this.addGame({
        nome: this.addModal.nome,
        empresa: this.addModal.empresa,
        imagem: this.addModal.imagem,
        ano: this.addModal.ano,
      });
      this.clearModalAdd();
    },
		async addGame(game) {
			await this.$fire.firestore.collection("games").add(game).then(reponse => {
				this.$toast.success('Jogo adicionado com sucesso!')
				this.getGames()
			}).catch(response => {
				this.$toast.error('Nao foi possivel adicionar o jogo!')
			})
		},
		async getGame(id) {
			let gameRef = this.$fire.firestore.collection("games").doc(id)
			let game = null
			await gameRef.get().then(response => {
				game = {id: response.id, ...response.data()}
			}).catch(response => {
				this.$toast.error(response)
			})
			return game
		}
  },
}