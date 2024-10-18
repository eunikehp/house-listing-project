<template>
  <div class="recommendations">
    <h3>Recommended for you</h3>
    <div class="house-list">
      <recommendation-list
        v-for="house in limitedRecommendations"
        :key="house.id"
        :id="house.id"
        :rooms="house.rooms"
        :size="house.size"
        :price="house.price"
        :image="house.image"
        :location="house.location"
        :show-buttons="false"
        @click="selectHouse(house)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RecommendationList from '../recommendation/RecommendationList.vue'
import { API_BASE_URL, API_KEY } from '@/apiConfig'

export default {
  name: 'RecommendationSection',
  components: { RecommendationList },
  data() {
    return {
      recommendations: [],
      displayedRecommendations: [] // For filtered and shuffled recommendations
    }
  },
  computed: {
    limitedRecommendations() {
      return this.displayedRecommendations
    }
  },
  mounted() {
    this.fetchRecommendations()
  },
  methods: {
    fetchRecommendations() {
      axios
        .get(API_BASE_URL, { headers: { 'X-Api-Key': API_KEY } })
        .then((response) => {
          this.recommendations = response.data
          // Initially populate displayedRecommendations with a shuffled selection of 3 houses
          this.displayedRecommendations = this.recommendations
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .slice(0, 3)
        })
        .catch((error) => {
          console.error('Error fetching recommendations:', error)
        })
    },
    selectHouse(house) {
      //Navigate to the HouseDetail route with the selected houseID
      this.$router.push({ name: 'HouseDetail', params: { id: house.id } })

      //Filter out the clicked house, shuffle the recommendations, and pick the first 3
      this.displayedRecommendations = this.recommendations
        .filter((recommendation) => recommendation.id !== house.id) //Exclude the selected houses
        .sort(() => (Math.random() > 0.5 ? 1 : -1)) //Shuffle the remaining houses
        .slice(0, 3) //Take the first 3 shuffled houses
    }
  }
}
</script>

<style scoped>
.recommendations {
  margin-left: 7rem;
}

.house-list {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .recommendations {
    margin: 3rem 0;
    max-width: 40rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  .recommendations {
    margin: 3rem 0;
    max-width: 50rem;
  }
}
</style>