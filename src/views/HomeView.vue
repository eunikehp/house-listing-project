<template>
  <div class="home">
    <div class="title">
      <h1>Houses</h1>
      <button>Create New</button>
    </div>
    <div>
      <input type="text" placeholder="Search for a house" />
      <span>
        <button>Price</button>
        <button>Size</button>
      </span>
    </div>

    <HouseCard
      v-for="item in houses"
      :key="item.id"
      :id="item.id"
      :rooms="item.rooms"
      :size="item.size"
      :price="item.price"
      :image="item.image"
      :location="item.location"
    />
  </div>
</template>


<script>
import HouseCard from '../components/HouseCard.vue'

export default {
  name: 'HomeView',
  components: { HouseCard },
  data() {
    return {
      houses: [
        {
          id: 2,
          image: 'https://api.intern.d-tt.nl/uploads/house1.jpg',
          price: 123,
          rooms: {
            bedrooms: 1,
            bathrooms: 1
          },
          size: 500,
          description: 'oui',
          location: {
            street: 'street',
            houseNumber: 20,
            houseNumberAddition: null,
            city: 'assas',
            zip: 'asasdd'
          },
          createdAt: '2020-05-07',
          constructionYear: 2000,
          hasGarage: false,
          madeByMe: false
        },
        {
          id: 3,
          image: 'https://api.intern.d-tt.nl/uploads/house2.jpg',
          price: 969000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1
          },
          size: 153,
          description:
            "Dit bijzondere appartement is gelegen op de bel-etage en in het souterrain van een Rijks monumentaal grachten pand ter hoogte van de 'Negen-straatje'. Deze woning kenmerkt zich door de vele originele details die behouden zijn. Bij de renovatie is met de grootste aandacht zorg gedragen voor het conserveren van de oorspronkelijke stijlelementen. Met name in de monumentale stijlkamer aan de voorzijde van de woning. Terwijl de keuken dan weer modern en state of the art is.",
          location: {
            street: 'Oud Heinstraat',
            houseNumber: 23,
            houseNumberAddition: '',
            city: 'Amsterdam',
            zip: '1016 BV'
          },
          createdAt: '2020-05-07',
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
}
</style>


