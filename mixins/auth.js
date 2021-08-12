export default {
  methods: {
    async login(email, senha) {
      await this.$fire.auth.signInWithEmailAndPassword(email, password).then(
       alert('logado')
      )
    }
  },
  computed: {
    isLogado() {
      return this.$store.state.auth.logged
    }
  }
}