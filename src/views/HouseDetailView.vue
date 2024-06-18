<template>
  <div class="back-button" @click="goBack">
    <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" /> Back to overview
  </div>

  <div class="container">
    <!-- House Detail Section -->
    <div class="card" v-if="house">
      <house-detail :house="house" @deleted="handleHouseDeleted" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <p>Error fetching house detail: {{ error }}</p>
    </div>
    <!-- Recommendation Section -->
    <recommendation />
  </div>
</template>

<script>
import Recommendation from '@/components/Recommendation.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import axios from 'axios'

export default {
  name: 'HouseDetailView',
  components: { Recommendation, HouseDetail },
  props: ['id'],
  data() {
    return {
      house: null,
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchHouse()
  },
  methods: {
    fetchHouse() {
      const url = `https://api.intern.d-tt.nl/api/houses/${this.$route.params.id}`
      axios
        .get(url, {
          headers: { 'X-Api-Key': '_lmzUrWvCsf7d1BI6iStJRNK0TpeQXyY' }
        })
        .then((response) => {
          const houses = response.data
          this.house = houses.find((house) => house.id == this.id)
          if (!this.house) {
            this.error = 'House not found'
          }
          this.loading = false
        })
        .catch((error) => {
          console.error('Error fetching house details:', error)
          this.error = error.message || 'Failed to fetch house details'
        })
    },
    goBack() {
      this.$router.back()
    },
    handleHouseDeleted() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>



<style scoped>
.card {
  margin-top: 2rem;
  margin-left: 14rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  background-color: var(--dtt-c-background-2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

.back-button {
  cursor: pointer;
  margin-left: 14rem;
}

.container {
  display: grid;
  grid-template-columns: 60% 40%;
}
</style>