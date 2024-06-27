<template>
  <div class="page">
    <div class="menu">
      <h1>Houses</h1>
      <button @click="goToCreateListing">CREATE NEW</button>
    </div>
    <div class="menu-search">
      <div class="input-container">
        <input
          type="text"
          placeholder="Search for a house"
          v-model="searchHouses"
          @input="filterHouses"
        />
        <img
          src="@/assets/icons/ic_clear@3x.png"
          v-if="searchHouses"
          @click="clearSearch"
          class="clear-button"
        />
      </div>
      <span>
        <button class="sort-button-by-price" @click="sortHouses('price')">Price</button>
        <button class="sort-button-by-city" @click="sortHouses('city')">City</button>
        <button class="sort-button-by-size" @click="sortHouses('size')">Size</button>
      </span>
    </div>
    <div v-if="showResult" class="results">{{ totalResults }} {{ results }} found</div>
    <div v-if="showEmptyHouses" class="no-results">
      <img alt="no-results" src="@/assets/icons/img_empty_houses@3x.png" height="150px" /><span
        >No results found. <br />Please try another keyword.</span
      >
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: { HouseCard },
  data() {
    return {
      sortOption: '',
      searchHouses: '',
      showResult: false,
      totalResults: null,
      showEmptyHouses: false,
      showClearButton: false
    }
  },
  mounted() {
    this.fetchDatafromAPI()
  },
  computed: {
    ...mapState(['houses', 'filteredHouses']),
    results() {
      return this.totalResults > 1 ? 'results' : 'result'
    }
  },
  methods: {
    ...mapActions(['fetchDatafromAPI']),

    // select a house to show the details
    selectHouse(house) {
      this.$router.push({ name: 'HouseDetail', params: { id: house.id } })
    },

    // go to 'create a new listing 'page'
    goToCreateListing() {
      this.$router.push({ name: 'CreateListing' })
    },

    // sort house by price and size
    sortHouses(option) {
      this.sortOption = option
      if (option === 'price') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => a.price - b.price)
        )
      } else if (option === 'size') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => a.size - b.size)
        )
      } else if (option === 'city') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => {
            const cityA = a.location.city.toUpperCase() // ignore upper and lowercase
            const cityB = b.location.city.toUpperCase() // ignore upper and lowercase
            if (cityA < cityB) {
              return -1
            }
            if (cityA > cityB) {
              return 1
            }
            return 0 // names must be equal
          })
        )
      }
    },

    // filter houses based on search term
    filterHouses() {
      if (this.searchHouses) {
        const filtered = this.houses.filter(
          (house) =>
            house.location.street.toLowerCase().includes(this.searchHouses.toLowerCase()) ||
            house.location.city.toLowerCase().includes(this.searchHouses.toLowerCase()) ||
            house.location.zip.toString().includes(this.searchHouses) ||
            house.price.toString().includes(this.searchHouses) ||
            house.size.toString().includes(this.searchHouses)
        )
        this.$store.commit('SET_FILTERED_HOUSES', filtered)
        if (filtered.length > 0) {
          this.showResult = true
          this.totalResults = filtered.length
        } else if (filtered.length === 0) {
          this.showResult = false
          this.showEmptyHouses = true
        }
      } else {
        this.$store.commit('SET_FILTERED_HOUSES', this.houses)
        this.showResult = false
        this.showEmptyHouses = false
      }
    },
    clearSearch() {
      this.searchHouses = ''
      this.filterHouses()
    }
  }
}
</script>

<style scoped>
.menu,
.menu-search,
.results,
.no-results {
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  padding-bottom: 1rem;
}

.results {
  color: var(--dtt-c-text-primary);
  font-weight: bold;
}

.no-results {
  flex-direction: column;
}

.no-results span {
  margin: 1rem 0;
  text-align: center;
}

span button {
  padding: 5px 25px;
  font-size: 12px;
  cursor: pointer;
  background-color: var(--dtt-c-tertiary-2);
  border-color: var(--dtt-c-tertiary-2);
}

.sort-button-by-price:focus,
.sort-button-by-size:focus,
.sort-button-by-city:focus {
  background-color: var(--dtt-c-primary);
  border-color: var(--dtt-c-primary);
}

.sort-button-by-price {
  border-radius: 5px 0 0 5px;
}

.sort-button-by-size {
  border-radius: 0 5px 5px 0;
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
  position: relative;
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

.clear-button {
  position: absolute;
  height: 15px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>


