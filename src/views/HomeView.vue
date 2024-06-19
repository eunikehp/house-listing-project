<template>
  <div class="page">
    <div class="menu">
      <h1>Houses</h1>
      <button @click="goToCreateListing">CREATE NEW</button>
    </div>
    <div class="menu-input">
      <div class="input-container">
        <input type="text" placeholder="Search for a house" />
      </div>
      <span>
        <button class="sort-button-by-price" @click="sortHouses('price')">Price</button>
        <button class="sort-button-by-size" @click="sortHouses('size')">Size</button>
      </span>
    </div>
    <HouseCard
      v-for="house in filteredHouses"
      :key="house.id"
      :id="house.id"
      :rooms="house.rooms"
      :size="house.size"
      :price="house.price"
      :image="house.image"
      :location="house.location"
      :show-buttons="true"
      @click="selectHouse(house)"
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
      houses: [],
      sortOption: '',
      filteredHouses: []
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
          this.filteredHouses = response.data
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    selectHouse(house) {
      this.$router.push({ name: 'HouseDetail', params: { id: house.id } })
    },
    goToCreateListing() {
      this.$router.push({ name: 'CreateListing' })
    },
    sortHouses(option) {
      this.sortOption = option
      if (option === 'price') {
        this.filteredHouses.sort((a, b) => a.price - b.price)
      } else if (option === 'size') {
        this.filteredHouses.sort((a, b) => a.size - b.size)
      }
    }
  }
}
</script>

<style scoped>
.menu {
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  padding-bottom: 1rem;
}

.menu-input {
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  padding-bottom: 1rem;
}

span button {
  padding: 5px 30px;
  font-size: 12px;
  cursor: pointer;
}

.sort-button-by-price {
  border-radius: 5px 0 0 5px;
}

.sort-button-by-size {
  border-radius: 0 5px 5px 0;
  background-color: var(--dtt-c-tertiary-2);
  border-color: var(--dtt-c-tertiary-2);
}

.input-container {
  position: relative;
  width: 250px;
}
.input-container input {
  width: 100%;
  background: url('@/assets/icons/ic_search@3x.png') no-repeat 4px center;
  background-size: 16px 16px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: var(--dtt-c-tertiary-1);
  padding: 8px 50px 8px 30px;
  color: var(--dtt-c-text-primary);
}

.menu button {
  background: url('@/assets/icons/ic_plus_white@3x.png') no-repeat 4px center;
  background-color: var(--dtt-c-primary);
  background-size: 16px 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px 20px 5px 40px;
}
</style>


