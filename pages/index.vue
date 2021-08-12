<template>
  <transition mode="out-in">
    <b-row class="text-center my-4">
      <b-col cols="12" class="mb-4">
        <h1 class="h1 font-custom font-xl">
          <b-icon icon="joystick" /> RUGames
        </h1>
      </b-col>
      <b-col cols="8" offset="2">
        <div class="text-center">
          <h3 class="h3 font-custom">Games</h3>
        </div>
      </b-col>
      <b-col cols="2" class="text-right">
        <button
          v-if="isLogado"
          @click="addModal.show = true"
          class="btn btn-primary btn-sm"
        >
          <b-icon icon="plus"></b-icon>
        </button>
      </b-col>
      <b-card-group deck>
        <template v-for="(game) in games">
          <b-col cols="12" md="4" class="text-left cursor-pointer" :key="game.id">
            <b-card
              class="my-3 card-image-overlay"
              @click="setGameAndRedirect(game)"
              overlay
              :img-src="game.imagem"
              img-alt="img"
              text-variant="white"
              :title="game.nome"
              :sub-title="game.empresa + ' | ' + game.ano"
              sub-title-text-variant="white"
            >
            </b-card>
          </b-col>
        </template>
      </b-card-group>
      <b-modal v-model="addModal.show" hide-footer title="Adicionar Jogo">
        <b-row>
          <b-col cols="12">
            <b-form @submit.prevent="submitAdd">
              <b-form-group label="Nome:" label-for="nome">
                <b-form-input
                  id="nome"
                  v-model="addModal.nome"
                  type="text"
                  placeholder="Nome do Jogo"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Empresa:" label-for="empresa">
                <b-form-input
                  id="empresa"
                  v-model="addModal.empresa"
                  type="text"
                  placeholder="Empresa desenvolvedora"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="URL da Imagem:" label-for="imagem">
                <b-form-input
                  id="imagem"
                  v-model="addModal.imagem"
                  type="text"
                  placeholder="https://rugames.com/imagem"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Ano de Publicacao:" label-for="ano">
                <b-form-input
                  id="ano"
                  v-model="addModal.ano"
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
    </b-row>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
import auth from "@/mixins/auth";
import games from "@/mixins/games";

export default {
  transition: "slide",
  mixins: [auth, games],
  methods: {
    ...mapMutations({
      setGame: "game/setGame",
    }),

    setGameAndRedirect(game) {
      this.setGame(game);

      this.$router.push("/game");
    },
  },
  beforeMount() {
    this.getGames();
  },
};
</script>