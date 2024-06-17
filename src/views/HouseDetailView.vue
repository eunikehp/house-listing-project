<template>
  <div>
    <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" :href="'/'" /> Back to
    overview
  </div>
  <div>
    <div class="card" v-if="house">
      <img alt="image" :src="house.image" height="100" />
      <div class="description">
        <div>
          <h3>{{ house.location.street }} {{ house.location.houseNumber }}</h3>
          <div class="icon-details">
            <img alt="edit" src="@/assets/icons/ic_edit@3x.png" height="12px" />
          </div>
          <div class="icon-details">
            <img alt="delete" src="@/assets/icons/ic_delete@3x.png" height="12px" />
          </div>
        </div>
        <img alt="location" src="@/assets/icons/ic_location@3x.png" />{{ house.location.zip }}
        {{ house.location.city }}
        <div>
          <img alt="price" src="@/assets/icons/ic_price@3x.png" /><span>{{ house.price }}</span>
          <img alt="size " src="@/assets/icons/ic_size@3x.png" /><span>{{ house.size }}m2</span>
          <img alt="construction" src="@/assets/icons/ic_construction_date@3x.png" /><span
            >Built in {{ house.constructionYear }}</span
          >
        </div>
        <div class="icons">
          <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" /><span>{{
            house.rooms.bedrooms
          }}</span>
          <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" /><span>{{
            house.rooms.bathrooms
          }}</span>
          <img alt="garage" src="@/assets/icons/ic_garage@3x.png" /><span>{{
            house.hasGarage
          }}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit libero a
          pellentesque accumsan. In enim metus, congue vitae elit vitae, venenatis hendrerit diam.
          Duis eget rutrum elit. Nullam elit odio, condimentum nec imperdiet vel, sollicitudin nec
          lorem. Maecenas fringilla, neque vitae pellentesque gravida.
        </p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <p>Error fetching house detail: {{ error }}</p>
    </div>
    <div class="recommend">
      <!-- <house-card :data="houses" /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HouseDetailView',
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
      const url = `https://api.intern.d-tt.nl/api/houses/${this.id}`
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
          console.error('Error fetching item details:', error)
          this.error = error.message || 'Failed to fetch house details'
        })
    }
  }
}
</script>



<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  background-color: var(--dtt-c-background-2);
}

.house-image {
  margin-right: 1rem;
  width: 100px;
  height: 100px;
}

.house-image img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  text-align: left;
  width: 37rem;
}

.description h3,
p {
  margin-bottom: 5px;
}

.icons img,
span {
  margin-right: 15px;
  height: 1rem;
}

.icon-details {
  margin-right: 20px;
  height: 1rem;
  cursor: pointer;
}
</style>