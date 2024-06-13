<template>
  <div class="home">
    <div>
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
import axios from 'axios'

export default {
  name: 'HomeView',
  components: { HouseCard },
  data() {
    return {
      houses: []
    }
  },
  mounted() {
    this.fetchDatafromAPI()
  },
  methods: {
    fetchDatafromAPI() {
      const apiUrl = 'https://api.intern.d-tt.nl/api/houses'

      axios
        .get(apiUrl, { headers: { 'X-Api-Key': '_lmzUrWvCsf7d1BI6iStJRNK0TpeQXyY' } })
        .then((response) => {
          this.houses = response.data
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }
}
</script>

<!-- <style scoped>
.title {
  display: flex;
  flex-direction: row;
}
</style> -->


