<template>

<div>
  <p></p>
<v-card class="mx-auto pl-2 pr-2 pt-2" max-width="344" outlined >

  <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Sign In</div>
      </v-list-item-content>
    </v-list-item>

  <v-form @submit.prevent="onSubmit()">
    <v-text-field label="Email" v-model="email" type="email" required>
      <input v-model="email" type="email">
    </v-text-field>

    <v-text-field label="Password" v-model="password" type="password" required>
      <input v-model="password" type="password">
    </v-text-field>

    <v-card-actions>
    <v-btn
      :disabled="email.length > 0 ? false : true"
      color="success"
      class="mr-4"
      type="submit"
    >
      Login
      <v-icon>mdi-login</v-icon>
    </v-btn>

     <v-btn class="mr-1" to="/signup">
      SignUp
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>

    </v-card-actions>
  </v-form>
</v-card>
</div>
</template>

<script>
  import { signIn } from './auth';

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async onSubmit () {
        await signIn(this.email, this.password);
        this.$router.push('/dashboard');
      }
    }
  };
</script>