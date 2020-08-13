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
        <div class="overline mb-4">Update Product</div>
      </v-list-item-content>
    </v-list-item>

  <v-form
      ref="form"
      lazy-validation
    >
    <v-text-field
      v-model="dataProducts.name"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="dataProducts.price"
      label="price"
      type="number"
    ></v-text-field>

 <v-card-actions>
    <v-btn
      color="success"
      class="mr-4"
      @click="onUpdateProduct"
    >
      Update
      <v-icon>mdi-check</v-icon>
    </v-btn>

    </v-card-actions>
    </v-form>
  </v-card>
</div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            formProduct: {
              name: '',
              price: 0,
            }
        }
    },
    mounted: async function(){
      // const productId = this.$route.params._id;
    },
    computed: {
      ...mapState({
        products: state => state.products.products.data ? state.products.products.data : [],
      }),
      dataProducts() {
        return this.products.filter(product => product._id == this.$route.params._id)[0];
      },
    },
    methods: {
      ...mapActions({
      updateProduct: "products/updateProduct",
    }),
    onUpdateProduct() {
      this.updateProduct({name: this.dataProducts.name, price: this.dataProducts.price, _id: this.dataProducts._id});
      this.$router.push('/dashboard');
    },
  }
}
</script>

<style>

</style>