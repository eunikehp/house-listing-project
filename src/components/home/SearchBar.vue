<template>
  <div class="search-bar">
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      searchHouses: ''
    }
  },
  computed: {
    ...mapState(['houses'])
  },
  methods: {
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

    // Clear search button
    clearSearch() {
      this.searchHouses = ''
      this.filterHouses()
    }
  }
}
</script>

<style scoped>
.search-bar {
  position: relative;
}

.search-bar input {
  width: 100%;
  background: url('@/assets/icons/ic_search@3x.png') no-repeat 16px center;
  background-size: 1.6rem 1.6rem;
  font-size: 1.2rem;
  height: 3.5rem;
  width: 37rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.8rem 0.2rem 0.8rem 4rem;
  background-color: var(--dtt-c-tertiary-1);
  color: var(--dtt-c-text-primary);
}

.clear-button {
  position: absolute;
  height: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  right: 1.6rem;
}

input::placeholder {
  left: 4.5rem;
}
</style>