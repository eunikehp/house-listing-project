<template>
  <div class="page">
    <div class="back-button" @click="goBack">
      <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" /> Back to overview
    </div>
    <h1>Create new listing</h1>
    <the-form :formData="formData" :onSubmit="submitForm" />
  </div>
</template>


<script>
import { API_BASE_URL, API_KEY, ENDPOINTS } from '@/apiConfig'
import TheForm from '../components/TheForm.vue'
import axios from 'axios'

export default {
  name: 'NewListingView',
  components: { TheForm },
  data() {
    return {
      formData: {
        price: null,
        bedrooms: null,
        bathrooms: null,
        size: null,
        description: '',
        streetName: '',
        houseNumber: null,
        numberAddition: '',
        city: '',
        zip: '',
        constructionYear: null,
        hasGarage: ''
      }
    }
  },
  methods: {
    async submitForm(formData, image) {
      console.log('Submitting form data:', formData)

      const imageUrl = await this.uploadImage(image)
      if (!imageUrl) {
        console.error('Failed to upload image')
        return
      }

      const payload = {
        ...formData,
        image: imageUrl, // use the uploaded image URL
        hasGarage: formData.hasGarage === 'yes' ? true : false // Convert 'yes'/'no' to boolean
      }

      try {
        const response = await axios.post(API_BASE_URL, payload, {
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json'
          }
        })
        console.log('Listing created:', response.data)
        this.$router.push({ name: 'Home' })
      } catch (error) {
        console.error('Error creating listing:', error)
      }
    },
    async uploadImage(image) {
      if (!this.listingId) {
        // listingId needs to be set
        console.error('Listing ID not available')
        return null
      }

      const imagePayload = new FormData()
      imagePayload.append('image', image)

      try {
        const response = await axios.post(ENDPOINTS.UPLOAD_IMAGE(this.listingId), imagePayload, {
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'multipart/form-data'
          }
        })
        return response.data.imageUrl // Adjust based on your API's response format
      } catch (error) {
        console.error('Error uploading image:', error)
        return null
      }
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

