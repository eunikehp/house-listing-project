<template>
  <div class="home">
    <div class="menu">
      <h1>Houses</h1>
      <button class="plus-button">CREATE NEW</button>
    </div>
    <div class="menu">
      <div class="input-container">
        <input type="text" placeholder="Search for a house" />
      </div>
      <span>
        <button class="sort-button-1">Price</button>
        <button class="sort-button-2">Size</button>
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

<style scoped>
.menu {
  max-width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  padding-bottom: 1rem;
}

.sort-button-1 {
  border-radius: 5px 0 0 5px;
  padding: 5px 30px;
  font-size: 12px;
}

.sort-button-2 {
  border-radius: 0 5px 5px 0;
  padding: 5px 30px;
  font-size: 12px;
}

.input-container {
  position: relative;
  width: 250px;
}
.input-container input {
  width: 100%;
  background: url('@/assets/icons/ic_search@3x.png') no-repeat 4px center;
  background-size: 16px 16px; /* Adjust to the image size */
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: var(--dtt-c-tertiary-1);
  padding: 8px 50px 8px 30px;
  color: var(--dtt-c-text-primary);
}

.plus-button {
  background: url('@/assets/icons/ic_plus_white@3x.png') no-repeat 4px center;
  background-color: var(--dtt-c-primary);
  background-size: 16px 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
}
</style>


