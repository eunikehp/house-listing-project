<template>
  <div>
    <a class="house-card">
      <div class="house-image" @click="$emit('click')">
        <img alt="Home Image" :src="image" />
      </div>
      <div class="listing-info" @click="$emit('click')">
        <ul>
          <li>
            <h2>{{ location.street }} {{ location.houseNumber }}</h2>
          </li>
          <li>
            <p>&#8364; {{ price }}</p>
          </li>
          <li>{{ location.zip }} {{ location.city }}</li>
          <li>
            <div class="icons">
              <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" /><span>{{
                rooms.bedrooms
              }}</span>
              <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" /><span>{{
                rooms.bathrooms
              }}</span>
              <img alt="size" src="@/assets/icons/ic_size@3x.png" /><span>{{ size }} m2</span>
            </div>
          </li>
        </ul>
      </div>
    </a>
  </div>
</template>
  
  <script>
// import DeleteListing from '@/components/DeleteListing.vue'

export default {
  name: 'RecommendationList',
  //   components: { DeleteListing },
  props: {
    id: Number,
    image: String,
    rooms: Object,
    location: Object,
    price: Number,
    size: Number
  },
  data() {
    return {
      showDeleteModal: false
    }
  }
  //   methods: {
  //     editListing() {
  //       this.$router.push({ name: 'EditListing', params: { id: this.id } })
  //     },
  //     handleModalClose(deleted) {
  //       this.showDeleteModal = false
  //       if (deleted) {
  //         this.$router.push({ name: 'Home' })
  //       }
  //     }
  //   }
}
</script>
  
  <style scoped>
.house-card {
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem 0.7rem;
  margin-top: 1rem;
  display: flex;
  background-color: var(--dtt-c-background-2);
  cursor: pointer;
}

.house-image {
  margin-right: 10px;
  width: 80px;
  height: 80px;
}

.house-image img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1,
h2,
p {
  font-size: 14px;
}

.listing-info {
  font-size: 14px;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 2px;
}

.icons img,
span {
  margin-right: 10px;
  height: 12px;
}

span {
  font-size: 14px;
  color: var(--dtt-c-text-primary);
}

.card-button {
  margin-right: 20px;
  height: 1rem;
  cursor: pointer;
}
</style>