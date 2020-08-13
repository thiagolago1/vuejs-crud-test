<template>
<div>
  <v-btn class="white pt-10" text to="/dashboard">
        <v-icon>mdi-keyboard-backspace</v-icon>
        <span class="mr-2" to="/dashboard">Back</span>
  </v-btn>

  <v-card
    class="mx-auto pl-2 pr-2"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Add new product</div>
      </v-list-item-content>
    </v-list-item>

  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="price"
      label="price"
      type="number"
      required
    ></v-text-field>

 <v-card-actions>
    <v-btn
      :disabled="name.length > 0 ? false : true"
      color="success"
      class="mr-4"
      @click="addProduct"
    >
      Save
      <v-icon>mdi-check</v-icon>
    </v-btn>

    </v-card-actions>
    </v-form>
  </v-card>
</div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  data() {
        return {
            name: '',
            price: 0,
            valid: true,
            nameRules: [
              v => !!v || 'Name is required',
              v => (v && v.length <= 15) || 'Name must be less than 15 characters',
            ],
        }
    },
    methods: {
      ...mapActions({
      addNewProduct: "products/addNewProduct",
    }),
    addProduct() {
      this.$refs.form.validate();
      this.addNewProduct({name: this.name, price: this.price})
      this.$router.push('/dashboard')
    },
  }
}
</script>

<style>

</style>