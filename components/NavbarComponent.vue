<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#" @click.prevent="redirect('/')" class="font-custom"
      >RUGames</b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="isLogado">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ $store.state.authentication.user.email }}</em>
          </template>
          <b-dropdown-item href="#" @click.prevent="logout()">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
        <template right v-else>
          <b-button @click="redirect('/login')" variant="light" class=""><b-icon icon="box-arrow-right"></b-icon> Login</b-button>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import auth from "@/mixins/auth";

export default {
  mixins: [auth],
  methods: {
    redirect(to) {
      this.$router.push(to);
    },
  },
};
</script>