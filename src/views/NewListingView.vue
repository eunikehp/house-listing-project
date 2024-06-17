<template>
  <div :style="image" class="page">
    <div class="back-button" @click="goBack">
      <img alt="back" src="@/assets/icons/ic_back_grey@3x.png" height="12px" /> Back to overview
    </div>
    <h1>Create new listing</h1>
    <the-form :formData="formData" :onSubmit="submitForm" />
  </div>
</template>


<script>
import TheForm from '../components/TheForm.vue'
import axios from 'axios'

export default {
  name: 'NewListingView',
  components: { TheForm },
  data() {
    return {
      image: { backgroundImage: 'url(@/assets/icons/img_background@3x.png)' },
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
      }
    }
  },
  methods: {
    submitForm() {
      axios
        .post('https://api.intern.d-tt.nl/api/houses', this.formData)
        .then((response) => {
          console.log('Listing created:', response.data)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.error('Error creating listing:', error)
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
  /* background-image: url ('@/assets/icons/img_background@3x.png'); */
  background-color: orange;
}

.back-button {
  cursor: pointer;
  margin-left: 14rem;
}

h1 {
  margin-left: 14rem;
}
</style>