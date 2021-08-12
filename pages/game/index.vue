<template>
  <transition mode="out-in">
    <div class="mb-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h1 class="h1 font-xl font-custom font-weight-bold">
            {{ game.nome }}
          </h1>
          <p class="h3 font-custom">{{ game.empresa }} | {{ game.ano }}</p>
        </b-col>
        <b-col cols="12 px-md-5 px-2 my-4">
          <img class="img-fluid rounded shadow" :src="game.imagem" alt="" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="2" class="text-left">
          <NuxtLink to="/" class="btn btn-sm btn-primary">
            <b-icon icon="chevron-left"></b-icon> Voltar
          </NuxtLink>
        </b-col>
        <b-col cols="6" offset-md="8" md="2" class="text-right">
          <button
            v-if="isLogado"
            class="btn btn-danger btn-sm"
            @click="deleteAndRedirect(game.id)"
          >
            <b-icon icon="trash"></b-icon>
          </button>
          <button
            v-if="isLogado"
            class="btn btn-info btn-sm"
            @click="updateGame()"
          >
            <b-icon icon="pencil"></b-icon>
          </button>
        </b-col>
      </b-row>
      <b-modal v-model="updateModal.show" hide-footer title="Editar Jogo">
        <b-row>
          <b-col cols="12">
            <b-form @submit.prevent="updateSubmit(game.id)">
              <b-form-group label="Nome:" label-for="nome">
                <b-form-input
                  id="nome"
                  v-model="updateModal.nome"
                  type="text"
                  placeholder="Nome do Jogo"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Empresa:" label-for="empresa">
                <b-form-input
                  id="empresa"
                  v-model="updateModal.empresa"
                  type="text"
                  placeholder="Empresa desenvolvedora"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="URL da Imagem:" label-for="imagem">
                <b-form-input
                  id="imagem"
                  v-model="updateModal.imagem"
                  type="text"
                  placeholder="https://rugames.com/imagem"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Ano de Publicacao:" label-for="ano">
                <b-form-input
                  id="ano"
                  v-model="updateModal.ano"
                  type="number"
                  placeholder="2001"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Salvar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-modal>
    </div>
  </transition>
</template>

<script>
import auth from "@/mixins/auth";
import games from "@/mixins/games";
import { mapMutations } from "vuex";

export default {
  transition: "slide",
  mixins: [auth, games],
  data() {
    return {
      updateModal: {
        show: false,
        nome: "",
        empresa: "",
        imagem: "",
        ano: "",
      },
    };
  },
  methods: {
    ...mapMutations({
      setGame: 'game/setGame'
    }),

    async deleteAndRedirect(id) {
      await this.$fire.firestore
        .collection("games")
        .doc(id)
        .delete()
        .then((response) => {
          this.$toast.success("Jogo excluido com sucesso!");
          this.$router.push("/");
        })
        .catch((response) => {
          this.$toast.erro("Nao foi possivel excluir o jogo!");
        });
    },
    updateGame() {
      this.updateModal.nome = this.game.nome;
      this.updateModal.empresa = this.game.empresa;
      this.updateModal.imagem = this.game.imagem;
      this.updateModal.ano = this.game.ano;
      this.updateModal.show = true;
    },
    async updateSubmit(id) {
      let docRef = this.$fire.firestore.collection('games').doc(id)
      await docRef.update({
        nome: this.updateModal.nome,
        empresa: this.updateModal.empresa,
        imagem: this.updateModal.imagem,
        ano: this.updateModal.ano
      }).then(response => {
        this.$toast.success('Jogo atualizado com sucesso!')
        console.log(this.getGame(id))
        this.setGame(this.getGame(id))
        this.updateModal.show = false
      })

    },
  },
  computed: {
    game() {
      return this.$store.state.game.game;
    },
  },
};
</script>