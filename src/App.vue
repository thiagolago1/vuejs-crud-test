<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>App Crud Test with Vuejs</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="green" text to="/add-new-product" v-show="this.$route.name == 'dashboard'">
        <span class="mr-2" >Add new Product</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn to="/" v-show="this.$route.name !== 'home'">
        <span class="mr-2" to="/">Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
