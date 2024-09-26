<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h2 class="modal-title">Delete listing</h2>
      <p>
        Are you sure want to delete the listing?<br />
        This action cannot be undone.
      </p>
      <div class="modal-button">
        <button @click="deleteListing">YES, DELETE</button>
        <button @click="closeModal" class="go-back-button">GO BACK</button>
      </div>
    </div>
  </div>
</template>

<script>
import { API_KEY, ENDPOINTS } from '@/apiConfig'
import axios from 'axios'

export default {
  name: 'DeleteListing',
  props: ['id', 'show', 'onClose'],
  methods: {
    closeModal() {
      this.$router.push({ name: 'Home' })
      this.onClose(false)
    },
    deleteListing() {
      axios
        .delete(ENDPOINTS.DELETE_LISTING(this.id), { headers: { 'X-Api-Key': API_KEY } })
        .then((response) => {
          console.log('Listing deleted:', response.data)
          this.onClose(true)
        })
        .catch((error) => {
          console.error('Error deleting listing:', error)
          this.onClose(false)
        })
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(187, 187, 187, 0.3);
  width: 50rem;
  max-width: 80%;
  border-radius: 0.8rem;
  box-sizing: border-box;
  text-align: center;
  z-index: 2;
}

.modal-content {
  font-size: 1.4rem;
}

.modal-title {
  margin-bottom: 2rem;
}

.modal-button {
  margin: 2.5rem auto 0.5rem auto;
}

button {
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  width: 30rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
}

.go-back-button {
  background-color: var(--dtt-c-secondary);
  border-color: var(--dtt-c-secondary);
}
</style>
