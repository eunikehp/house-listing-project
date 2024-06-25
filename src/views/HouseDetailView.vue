<template>
  <div class="page">
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
  </div>
</template>

<script>
import Recommendation from '@/components/Recommendation.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import axios from 'axios'
import { API_KEY, ENDPOINTS } from '@/apiConfig'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HouseDetailView',
  components: { Recommendation, HouseDetail },
  props: ['id'],
  data() {
    return {
      loading: true,
      error: null
    }
  },
  computed: {
    ...mapState(['houses']),
    house() {
      return this.houses.find((house) => house.id == this.$route.params.id)
    }
  },
  created() {
    this.fetchHouse()
  },
  methods: {
    ...mapActions(['fetchDatafromAPI']),
    async fetchHouse() {
      try {
        this.loading = true
        await this.fetchDatafromAPI()
        if (!this.house) {
          throw new Error('House not found')
        }
      } catch (error) {
        console.error('Error fetching house details:', error)
        this.error = error.message || 'Failed to fetch house details'
      } finally {
        this.loading = false
      }
    },
    goBack() {
      this.$router.push({ name: 'Home' })
    },
    handleHouseDeleted() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>



<style scoped>
.page {
  margin: auto 3rem;
}

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