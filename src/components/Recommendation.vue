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
import RecommendationList from './RecommendationList.vue'
import { API_BASE_URL, API_KEY } from '@/apiConfig'

export default {
  name: 'RecommendationSection',
  components: { RecommendationList },
  data() {
    return {
      recommendations: []
    }
  },
  computed: {
    limitedRecommendations() {
      // return this.recommendations.slice(0, 3)
      return [...this.recommendations].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)
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
        })
        .catch((error) => {
          console.error('Error fetching recommendations:', error)
        })
    },
    selectHouse(house) {
      this.$router.push({ name: 'HouseDetail', params: { id: house.id } })
    }
  }
}
</script>

<style scoped>
.recommendations {
  margin-left: 70px;
}

.house-list {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .recommendations {
    margin: 30px 0;
    max-width: 40rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  .recommendations {
    margin: 30px 0;
    max-width: 50rem;
  }
}
</style>