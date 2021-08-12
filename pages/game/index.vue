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
        <b-col cols="2" class="text-left">
          <NuxtLink to="/" class="btn btn-sm btn-primary">
            <b-icon icon="chevron-left"></b-icon> Voltar
          </NuxtLink>
        </b-col>
        <b-col cols="2" offset="8" class="text-right">
          <button class="btn btn-danger btn-sm" @click="deleteAndRedirect(game.index)">
              <b-icon icon="trash"></b-icon>
          </button>
        </b-col>
      </b-row>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  transition: "slide",
  data() {
    return {};
  },
  methods: {
      ...mapMutations({
        deleteGame: 'game/deleteGame'
      }),
      deleteAndRedirect(index) {
          this.deleteGame(index)

          this.$router.push('/')
      }
  },
  computed: {
    game() {
      return this.$store.state.game.game;
    },
  },
};
</script>