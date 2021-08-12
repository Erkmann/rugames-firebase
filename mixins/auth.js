import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setUserStore: 'authentication/setUserStore',
      setLogado: 'authentication/setLogado',
    }),

    async login(email, senha) {
      await this.$fire.auth.signInWithEmailAndPassword(email, senha).then(response => {
        this.setUserStore({
          email: response.user.email
        })
        this.setLogado(true)
        this.$toast.success('Logado com sucesso!')
        this.$router.push('/')
      }).catch(response => {
        this.$toast.error(response.message)
      })
    },

    async logout() {
      await this.$fire.auth.signOut().then(reponse => {
        this.setUserStore({})
        this.setLogado(false)
        this.$toast.success('Ate a proxima!')
        this.$router.push('/')
        }
      ).catch(response => {
        this.$toast.error('Algo deu errado!')
      })
    }
  },
  computed: {
    isLogado() {
      return this.$store.state.authentication.logged
    }
  }
}