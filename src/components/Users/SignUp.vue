<template>

<div>
  <p></p>
<v-card class="mx-auto pl-2 pr-2 pt-2" max-width="344" outlined >

  <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Sign Up</div>
      </v-list-item-content>
    </v-list-item>

  <v-form @submit.prevent="signup()">

    <v-text-field label="Name" v-model="user.name" type="name" required>
      <input v-model="user.name" type="text">
    </v-text-field>

    <v-text-field label="Email" v-model="user.email" type="email" required>
      <input v-model="user.email" type="email">
    </v-text-field>

    <v-text-field label="Password" v-model="user.password" type="password" required>
      <input v-model="user.password" type="password">
    </v-text-field>

    <v-card-actions>
    <v-btn
      
      color="success"
      class="mr-4"
      type="submit"
    >
      Register
      <v-icon>mdi-register</v-icon>
    </v-btn>

     <v-btn class="mr-1" to="/">
      Back
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-btn>

    </v-card-actions>
  </v-form>
</v-card>
</div>
</template>

<script>
  // import { signUp } from './auth';
  import axios from 'axios';

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        user: {}
      }
    },
    methods: {
        signup() {
            axios.post(`http://localhost:3333/signup`, this.user)
                .then(() => {
                    this.user = {}
                })
        }
    }
  };
</script>