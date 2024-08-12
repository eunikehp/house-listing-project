<template>
  <div class="container">
    <div class="content">
      <div class="back-btn" @click="goBack">
        <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" /> Back to detail
        page
      </div>
      <h1>Edit listing</h1>
      <the-form :isEditMode="true" :formData="formData" :onSubmit="submitForm" />
    </div>
  </div>
</template>
  
  
<script>
import { ENDPOINTS, API_KEY } from '@/apiConfig'
import TheForm from '../components/TheForm.vue'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'EditListingView',
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
      },
      listingId: this.$route.params.id
    }
  },
  watch: {
    house: {
      handler(newData) {
        if (newData) {
          this.formData = {
            image: newData.image,
            price: newData.price,
            bedrooms: newData.rooms.bedrooms,
            bathrooms: newData.rooms.bathrooms,
            size: newData.size,
            description: newData.description,
            streetName: newData.location.street,
            houseNumber: newData.location.houseNumber,
            numberAddition: newData.location.houseNumberAddition,
            city: newData.location.city,
            zip: newData.location.zip,
            constructionYear: newData.constructionYear,
            hasGarage: newData.hasGarage
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['selectedHouse']),
    house() {
      return this.selectedHouse
    }
  },
  mounted() {
    console.log(this.listingId)
    this.fetchListingData(this.listingId)
  },
  methods: {
    ...mapActions(['fetchListingData', 'editListing']),
    async submitForm(updatedData, imageFile) {
      console.log('Submitting form data:', updatedData)

      try {
        // Upload image with house ID
        const imageUrl = await this.uploadImage(imageFile, this.listingId)

        const payload = {
          ...updatedData,
          image: imageUrl, // the uploaded image URL
          hasGarage: updatedData.hasGarage === 'Yes' ? true : false // Convert 'yes'/'no' to boolean
        }

        //Update listing with the image
        await axios.post(ENDPOINTS.UPDATE_LISTING(this.listingId), payload, {
          headers: { 'X-Api-Key': API_KEY, 'Content-Type': 'application/json' }
        })

        await this.editListing({ houseId: this.listingId, updatedData: payload })

        console.log('Listing created successfully')
        // route to the listing
        this.$router.push({ name: 'HouseDetail', params: { id: this.listingId } })
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

.content {
  margin: auto;
  width: 1000px;
}

@media (max-width: 600px) {
  h1,
  .back-btn {
    margin-left: 5rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  h1,
  .back-btn {
    margin-left: 12rem;
  }
}
</style>