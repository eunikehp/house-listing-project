<template>
  <div class="container">
    <div class="back-button" @click="goBack">
      <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="14px" /> Back to overview
    </div>
    <h1>Create new listing</h1>
    <the-form :isEditMode="false" :formData="formData" :onSubmit="submitForm" />
  </div>
</template>


<script>
import { API_KEY, ENDPOINTS } from '@/apiConfig'
import TheForm from '../components/TheForm.vue'
import axios from 'axios'
import { mapActions } from 'vuex'

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
    ...mapActions(['createNewListing']),
    async submitForm(formData, imageFile) {
      console.log('Submitting form data:', formData)

      try {
        // Create listing to get house ID
        const response = await this.createNewListing(formData)
        const houseId = response.data.id

        // Upload image with house ID
        const imageUrl = await this.uploadImage(imageFile, houseId)

        const payload = {
          ...formData,
          image: imageUrl, // the uploaded image URL
          hasGarage: formData.hasGarage === 'Yes' ? true : false // Convert 'yes'/'no' to boolean
        }

        //Update listing with the image
        await axios.post(ENDPOINTS.UPDATE_LISTING(houseId), payload, {
          headers: { 'X-Api-Key': API_KEY, 'Content-Type': 'application/json' }
        })

        console.log('Listing created successfully')
        // route to new listing
        this.$router.push({ name: 'HouseDetail', params: { id: houseId } })
      } catch (error) {
        console.error('Error creating listing:', error)
      }
    },
    async uploadImage(imageFile, houseId) {
      const imagePayload = new FormData()
      imagePayload.append('image', imageFile)

      try {
        const response = await axios.post(ENDPOINTS.UPLOAD_IMAGE(houseId), imagePayload, {
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'multipart/form-data'
          }
        })
        return response.data.imageUrl
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
.container {
  padding-bottom: 5rem;
  background-image: url('@/assets/icons/img_background@3x.png');
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  width: 100%;
}

h1,
.back-button {
  margin-left: 18rem;
}

@media screen and (max-width: 600px) {
  h1,
  .back-button {
    margin-left: 5rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  h1,
  .back-button {
    margin-left: 12rem;
  }
}
</style>

