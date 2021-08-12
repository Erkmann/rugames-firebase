<template>
  <b-row class="my-3">
    <b-col
      cols="12"
      md="6"
      offset-md="3"
      class="border border-secondary p-2 rounded shadow"
    >
      <h1 class="h1 font-custom text-center">Login</h1>
      <b-form @submit.prevent="login(form.email, form.senha)">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="email"
            v-model="form.email"
            placeholder="rugames@gmail.com"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            placeholder="****"
            v-model="form.senha"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Logar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import auth from "@/mixins/auth";

export default {
  mixins: [auth],
  data() {
    return {
      form: {
        email: "",
        senha: "",
      },
    };
  },
  beforeMount() {
      if (this.isLogado) {
          this.$router.push('/')
      }
  }
};
</script>