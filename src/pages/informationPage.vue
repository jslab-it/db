<template>
  <div class="py-1">
    <v-divider class="mb-1"></v-divider>
    <div>
      <span class="text-h4 font-weight-bold">Casa Gaja</span>
    </div>
   <v-divider class="my-1"></v-divider>
    <v-carousel hide-delimiters cycle show-arrows-on-hover height="250px">
      <v-carousel-item
        v-for="(item,i) in carouselImages"
        :key="i"
        :src="item"
      ></v-carousel-item>
    </v-carousel>
    <information-tabs-component/>
    <v-row>
      <v-col cols="12" class="text-center mt-2">
        <v-btn color="primary" block @click="submitForm">Prenota</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import InformationTabsComponent from "@/components/informationTabsComponent.vue";

export default {
  name: "informationPage",
  components: {InformationTabsComponent},
  data() {
    return {
      carouselImages:[
        require('@/assets/carouselImage1.jpg'),
        require('@/assets/carouselImage2.jpg'),
        require('@/assets/carouselImage3.jpg'),
        require('@/assets/carouselImage4.jpg'),
        require('@/assets/carouselImage5.jpg'),
        require('@/assets/carouselImage6.jpg'),
        require('@/assets/carouselImage7.jpg')
      ]
         };
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'book'});
    }
  }
}
</script>

<style scoped>

</style>
