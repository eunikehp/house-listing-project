<template>
  <div class="page">
    <div class="back-button" @click="goBack">
      <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" /> Back to detail page
    </div>
    <h1>Edit listing</h1>
    <the-form :formData="formData" :onSubmit="submitForm" />
  </div>
</template>
  
  
<script>
import TheForm from '../components/TheForm.vue'
import axios from 'axios'

export default {
  name: 'EditListingView',
  components: { TheForm },
  data() {
    return {
      formData: {
        image: '',
        price: '',
        rooms: {
          bedrooms: null,
          bathrooms: null
        },
        size: '',
        description: '',
        location: {
          street: '',
          houseNumber: '',
          houseNumberAddition: null,
          city: '',
          zip: ''
        },
        constructionYear: null,
        hasGarage: ''
      },
      listingId: this.$route.params.id
    }
  },
  mounted() {
    this.fetchListingData()
  },
  methods: {
    fetchListingData() {
      const url = 'https://api.intern.d-tt.nl/api/${this.listingId}'
      axios
        .get(url, { headers: { 'X-Api-Key': '_lmzUrWvCsf7d1BI6iStJRNK0TpeQXyY' } })
        .then((response) => {
          this.formData = response.data
        })
        .catch((error) => {
          console.error('Error fetching listing data:', error)
        })
    },
    submitForm(updatedData) {
      const url = 'https://api.intern.d-tt.nl/api/${this.listingId}'
      axios
        .put(url, updatedData, { headers: { 'X-Api-Key': '_lmzUrWvCsf7d1BI6iStJRNK0TpeQXyY' } })
        .then((response) => {
          console.log('Listing updated:', response.data)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.error('Error updating listing data:', error)
        })
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>
  
<style scoped >
.page {
  padding-bottom: 5rem;
  background-image: url('@/assets/icons/img_background@3x.png');
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}

h1,
.back-button {
  margin-left: 18rem;
}
</style>