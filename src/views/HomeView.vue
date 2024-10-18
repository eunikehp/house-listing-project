<template>
  <div class="container">
    <div class="title-row">
      <h1>Houses</h1>
      <create-new-button></create-new-button>
    </div>

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
import CreateNewButton from '@/components/home/CreateNewButton.vue'

export default {
  name: 'HomeView',
  components: { HouseCard, SearchBar, SortButton, SearchNotif, CreateNewButton },
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
.title-row,
.search-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
.search-row {
  margin-bottom: 1rem;
}
</style>


