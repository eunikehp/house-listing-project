<template>
  <img alt="house-image" :src="house.image" class="house-image" height="350" />
  <div class="description">
    <header>
      <h1 class="header-title">{{ house.location.street }} {{ house.location.houseNumber }}</h1>
      <!-- Edit button -->
      <img
        class="card-icon"
        v-if="shouldShowButtons"
        alt="edit"
        src="@/assets/icons/ic_edit@3x.png"
        height="15px"
        @click="editListing"
      />
      <!-- Delete button -->
      <img
        alt="delete"
        v-if="shouldShowButtons"
        src="@/assets/icons/ic_delete@3x.png"
        height="15px"
        @click="showDeleteModal = true"
        class="card-icon"
      />
      <!-- Delete listing modal -->
      <delete-listing :id="house.id" :show="showDeleteModal" :onClose="handleModalClose" />
    </header>

    <!-- Listing Information -->
    <div class="listing-info">
      <ul>
        <li>
          <img alt="location" src="@/assets/icons/ic_location@3x.png" />{{ house.location.zip }}
          {{ house.location.city }}
        </li>
        <li>
          <img alt="price" src="@/assets/icons/ic_price@3x.png" /><span>{{ house.price }}</span>
          <img alt="size" src="@/assets/icons/ic_size@3x.png" /><span>{{ house.size }} m2</span>
          <img alt="construction" src="@/assets/icons/ic_construction_date@3x.png" /><span
            >Built in {{ house.constructionYear }}</span
          >
        </li>
        <li>
          <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" /><span>{{
            house.rooms.bedrooms
          }}</span>
          <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" /><span>{{
            house.rooms.bathrooms
          }}</span>
          <img alt="garage" src="@/assets/icons/ic_garage@3x.png" /><span>{{
            house.hasGarage
          }}</span>
        </li>
      </ul>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit libero a
      pellentesque accumsan. In enim metus, congue vitae elit vitae, venenatis hendrerit diam. Duis
      eget rutrum elit. Nullam elit odio, condimentum nec imperdiet vel, sollicitudin nec lorem.
      Maecenas fringilla, neque vitae pellentesque gravida.
    </p>
  </div>
</template>

<script>
import DeleteListing from '@/components/DeleteListing.vue'

export default {
  name: 'HouseDetail',
  components: { DeleteListing },
  props: {
    house: Object,
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
  emits: ['deleted'],
  computed: {
    shouldShowButtons() {
      return this.madeByMe && this.showButtons
    }
  },
  methods: {
    editListing() {
      this.$router.push({ name: 'EditListing' })
    },
    handleModalClose() {
      this.showDeleteModal = false
      this.$emit('deleted')
    }
  }
}
</script>

<style scoped>
.house-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  margin: 2rem 1.5rem;
  text-align: left;
  max-width: 40rem;
}

header {
  display: grid;
  grid-template-columns: auto 15px 15px;
  grid-gap: 15px;
  margin-bottom: 0.8rem;
  max-width: 40rem;
}

.header-title {
  margin: 0;
  padding: 0;
}

.card-icon {
  height: 1rem;
  cursor: pointer;
  margin-left: auto;
}

.listing-info {
  margin-bottom: 0.8rem;
  font-size: 16px;
  font-weight: 600;
  color: var(--dtt-c-text-secondary);
}

.listing-info ul {
  list-style: none;
  padding: 0;
}

.listing-info li {
  margin-bottom: 10px;
}

.listing-info img,
span {
  margin-right: 15px;
  height: 15px;
}

p {
  line-height: 1.7;
}
</style>
