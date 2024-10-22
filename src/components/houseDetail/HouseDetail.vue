<template>
  <img alt="house-image" :src="house.image" class="house-image" height="350" />
  <div class="description">
    <header>
      <h1 class="header-title">{{ house.location.street }} {{ house.location.houseNumber }}</h1>
      <!-- Edit button -->
      <edit-button v-if="shouldShowButtons"></edit-button>

      <!-- Delete button -->
      <delete-button v-if="shouldShowButtons" @click="showDeleteModal = true"></delete-button>

      <!-- Delete listing modal -->
      <delete-listing :id="house.id" :show="showDeleteModal" :onClose="handleModalClose" />
    </header>

    <!-- Listing Information -->
    <listing-info :house="house"></listing-info>
  </div>
</template>

<script>
import DeleteListing from '@/components/DeleteListing.vue'
import EditButton from '../button/EditButton.vue'
import DeleteButton from '../button/DeleteButton.vue'
import ListingInfo from './ListingInfo.vue'

export default {
  name: 'HouseDetail',
  components: { DeleteListing, EditButton, DeleteButton, ListingInfo },
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
  max-width: 100%;
}

header {
  display: grid;
  grid-template-columns: auto 1.5rem 1.5rem;
  grid-gap: 1.5rem;
  margin-bottom: 0.8rem;
  max-width: 100%;
}

.header-title {
  margin: 0;
  padding: 0;
}
</style>
