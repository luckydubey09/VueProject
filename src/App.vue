<template>
   <v-app>
    <v-main>
      <appBar></appBar>
      <v-container>
        <AllCards></AllCards>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AllCards from './components/all-cards.vue'
import appBar from './components/appBar.vue'
export default {
  name: 'App',
  components: {
    AllCards,
    appBar
  }
}
</script>

