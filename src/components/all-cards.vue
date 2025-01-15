<template>
  <v-container>
    
  
    <v-row>
    <v-col cols="4" v-for="prodData in productData" :key="prodData.id">
      <prodCardsVue :prodData="prodData"></prodCardsVue>
    </v-col>
  </v-row>
  <template slot="progress">
        <v-progress-circular
          v-if="loading"
          color="primary"
          height="50"
          indeterminate
        ></v-progress-circular>
      </template>
  </v-container>
</template>

<script>
import prodCardsVue from "./prodCards.vue";
import axios from "axios";
export default {
  name: "AllCards",
  components: {
    prodCardsVue,
  },
  data: () => ({
    productData: [],
    loading: true,
  }),
  created() {
    this.loading = true;
    this.getProdData();
  },
  methods: {
    async getProdData() {
      let resp = await axios.get("https://fakestoreapi.com/products")
      this.productData = resp.data;
      this.loading = false;
      console.log(this.productData)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
