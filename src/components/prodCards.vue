<template>
  <v-card class="mx-auto my-12" max-width="374" height="560">
    <div
      style="
        width: 100%;
        height: 300px;
        align-items: center;
        display: flex;
        justify-content: center;
      "
    >
      <v-img
        contain
        style="object-fit: contain; width: 100%; height: 100%"
        :src="prodData.image"
      ></v-img>
    </div>
    <v-divider class="mx-4"></v-divider>
    <v-card-title style="height: 120px; font-size: medium">{{
      prodData.title
    }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          v-model="rating"
          :color="checkRating"
          background-color="grey darken-1"
          half-increments
          readonly
          small
        ></v-rating>

        <div class="grey--text ms-4">
          {{ prodData.rating.rate }} ({{ prodData.rating.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ {{ prodData.price }}</div>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>

      <v-btn icon @click="addWishlist">
        <v-icon :color="checkSelect">mdi-heart</v-icon>
      </v-btn>
      <v-btn color="primary">
        Add To Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
  <script>
export default {
  props: { prodData: {} },
  data: () => ({
    rating: 0,
    checkRating: ""
  }),
  created() {
    this.rating = this.prodData.rating.rate;
    this.checkRating = this.rating > 3 ? "green" : "amber";
  },
  methods: {
 
  },
};
</script>