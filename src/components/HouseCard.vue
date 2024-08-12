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
      <div class="card-button" v-if="shouldShowButtons">
        <img src="@/assets/icons/ic_edit@3x.png" height="12px" @click.stop="editListing" />
      </div>
      <div class="card-button" v-if="shouldShowButtons">
        <img
          src="@/assets/icons/ic_delete@3x.png"
          height="12px"
          @click.stop="showDeleteModal = true"
        />
      </div>
      <delete-listing :id="id" :show="showDeleteModal" :onClose="handleModalClose" />
    </a>
  </div>
</template>

<script>
import DeleteListing from '@/components/DeleteListing.vue'

export default {
  name: 'HouseCard',
  components: { DeleteListing },
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
    editListing() {
      this.$router.push({ name: 'EditListing', params: { id: this.id } })
    },
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
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 9rem auto 2rem 2rem;
  background-color: var(--dtt-c-background-2);
  cursor: pointer;
}

.house-image {
  margin-right: 1rem;
  width: 130px;
  height: 130px;
}

.house-image img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.listing-info {
  font-size: 16px;
  text-align: left;
  min-width: 14rem;
  margin: auto 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 7px;
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