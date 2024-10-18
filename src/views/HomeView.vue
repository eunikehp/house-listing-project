<template>
  <div class="container">
    <div class="title">
      <h1>Houses</h1>
      <button class="create-new-button" @click="goToCreateListing">CREATE NEW</button>
    </div>

    <!-- Search bar and sort button -->
    <div class="search-row">
      <search-bar></search-bar>
      <sort-button></sort-button>
    </div>

    <!-- A notif if houses have been found -->
    <div v-if="showResult" class="results">
      <h2>{{ totalResults }} {{ results }} found</h2>
    </div>

    <!-- If no result -->
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
      :madeByMe="house.madeByMe"
      :show-buttons="true"
      @click="selectHouse(house)"
    />
  </div>
</template>

<script>
import HouseCard from '../components/HouseCard.vue'
import { mapState, mapActions } from 'vuex'
import SearchBar from '@/components/home/SearchBar.vue'
import SortButton from '@/components/home/SortButton.vue'

export default {
  name: 'HomeView',
  components: { HouseCard, SearchBar, SortButton },
  data() {
    return {
      sortOption: '',
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
    }
  }
}
</script>

<style scoped>
.title,
.search-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
.search-row {
  margin-bottom: 1rem;
}

.create-new-button {
  background: url('@/assets/icons/ic_plus_white@3x.png') no-repeat 15px center;
  background-color: var(--dtt-c-primary);
  background-size: 1.3rem 1.3rem;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.8rem 2rem 0.8rem 4rem;
}

.results {
  margin-top: 2rem;
}

.no-results {
  flex-direction: column;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
}
</style>


