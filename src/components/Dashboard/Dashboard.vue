<template>
<div>
   <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Product Name</th>
          <th class="text-left">Price</th>
          <th class="text-left"></th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product._id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price | currency }}</td>
          <td><v-btn><v-icon @click="onClickRemoveButton(product._id)">mdi-delete</v-icon></v-btn></td>
          <td><v-btn @click="updateProduct(product._id)"><v-icon>mdi-pencil</v-icon></v-btn></td>
        </tr>
      </tbody>

       <v-row justify="center" v-show="removeProductStatus">
        <v-dialog v-model="removeProductStatus" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this product?</v-card-title>
            <v-card-text>Product id: {{dataProducts == undefined ? '' : dataProducts._id}}</v-card-text>
            <v-card-text>Product name: {{dataProducts == undefined ? '' : dataProducts.name}} </v-card-text>
            <v-card-text>Product price: {{dataProducts == undefined ? '' : dataProducts.price}} </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black darken-1" text @click="removeProductStatus = false">Cancel</v-btn>
              <v-btn color="red darken-1" text @click="onClickToRemoveProduct(dataProducts._id)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

    </template>
  </v-simple-table>
</div>
</template>

<script>

import { mapState, mapActions } from "vuex";
import _ from 'lodash'

export default {
    mounted: async function() {
      this.getProducts();
    },
    data() {
      return {
        removeProductStatus: false,
        idProduct: '',
      }
    },
    watch: {
      "this.getProducts": {
        deep: true,
          handler() {
          this.getProducts();
        }
      }
    },
    computed: {
      ...mapState({
        products: state => state.products.products.data ? state.products.products.data : [],
      }),
      dataProducts() {
          return this.products.filter(product => product._id == this.idProduct)[0];
      },
  },
   methods: {
     ...mapActions({
      getProducts: "products/getProducts",
      removeProduct: "products/removeProduct"
    }),
    onClickRemoveButton(productId) {
      this.removeProductStatus = !this.removeProductStatus;
      this.idProduct = _.cloneDeep(productId);
    },
    onClickToRemoveProduct(productId) {
      this.removeProduct(productId);
      this.removeProductStatus = false;
      this.getProducts();
    },
    updateProduct(productId) {
        this.$router.push(`/update-product/${productId}`);
      }
   }
}
</script>

<style>

</style>