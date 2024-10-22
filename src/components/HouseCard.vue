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

      <!-- Edit Button -->
      <div v-if="shouldShowButtons">
        <edit-button :id="id"></edit-button>
      </div>

      <!-- Delete Button -->
      <div v-if="shouldShowButtons">
        <delete-button @click.stop="showDeleteModal = true"></delete-button>
      </div>

      <delete-listing :id="id" :show="showDeleteModal" :onClose="handleModalClose" />
    </a>
  </div>
</template>

<script>
import DeleteListing from '@/components/DeleteListing.vue'
import EditButton from './button/EditButton.vue'
import DeleteButton from './button/DeleteButton.vue'

export default {
  name: 'HouseCard',
  components: { DeleteListing, EditButton, DeleteButton },
  props: {
    id: Number,
    image: String,
    rooms: Object,
    location: Object,
    price: Number,
    size: Number,
    showButtons: {
      type: Boolean,
      default: true
    },
    madeByMe: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showDeleteModal: false
    }
  },
  computed: {
    shouldShowButtons() {
      return this.madeByMe && this.showButtons
    }
  },
  methods: {
    handleModalClose(deleted) {
      this.showDeleteModal = false
      if (deleted) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style scoped>
.house-card {
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 15rem auto 3rem 3rem;
  background-color: var(--dtt-c-background-2);
  cursor: pointer;
}

.house-image {
  margin-right: 1rem;
  width: 13rem;
  height: 13rem;
}

.house-image img {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.listing-info {
  font-size: 1.6rem;
  text-align: left;
  min-width: 14rem;
  margin: auto 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.7rem;
}

.icons img,
span {
  margin-right: 1rem;
  height: 1.2rem;
}

span {
  font-size: 1.4rem;
  color: var(--dtt-c-text-primary);
}
</style>