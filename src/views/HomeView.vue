<template>
  <div class="container">
    <div class="title">
      <h1>Houses</h1>
      <button class="create-new-button" @click="goToCreateListing">CREATE NEW</button>
    </div>

    <!-- Search bar and sort button -->
    <div class="search-row">
      <search-bar @update-results="updateResults"></search-bar>
      <sort-button></sort-button>
    </div>

    <search-notif
      :show-result="showResult"
      :total-results="totalResults"
      :show-empty-houses="showEmptyHouses"
    ></search-notif>

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
import SearchNotif from '@/components/home/SearchNotif.vue'

export default {
  name: 'HomeView',
  components: { HouseCard, SearchBar, SortButton, SearchNotif },
  data() {
    return {
      sortOption: '',
      showResult: false,
      totalResults: null,
      showEmptyHouses: false
    }
  },
  mounted() {
    this.fetchDatafromAPI()
  },
  computed: {
    ...mapState(['filteredHouses']),
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

    // handle updates from search bar
    updateResults({ showResult, totalResults, showEmptyHouses }) {
      this.showResult = showResult
      this.totalResults = totalResults
      this.showEmptyHouses = showEmptyHouses
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
</style>


