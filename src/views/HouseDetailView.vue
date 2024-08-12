<template>
  <div class="container">
    <div class="back-btn" @click="goBack">
      <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" />Back to overview
    </div>

    <div class="content">
      <!-- House Detail Section -->
      <div class="card" v-if="house">
        <house-detail :house="house" :madeByMe="house.madeByMe" @deleted="handleHouseDeleted" />
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
    // Back button
    goBack() {
      this.$router.push({ name: 'Home' })
    },

    // if house is deleted, the page is directed to home page.
    handleHouseDeleted() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>



<style scoped>
.content {
  display: grid;
  grid-template-columns: 60% 40%;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: var(--dtt-c-background-2);
  box-shadow: 0 0 3px rgba(177, 177, 177, 0.2);
}

@media (max-width: 600px) {
  .container {
    margin-left: 3rem;
    max-width: 30rem;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-left: 0;
  }

  .back-btn {
    margin-left: 0rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  .container {
    margin-left: 5rem;
    max-width: 30rem;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-left: 0;
  }

  .back-btn {
    margin-left: 0rem;
  }
}
</style>