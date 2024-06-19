<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="street-name">Street name*</label>
      <input
        id="street-name"
        type="text"
        v-model="formData.location.street"
        placeholder="Enter the street name"
        required
      />
    </div>
    <div class="form-column">
      <div>
        <label for="house-number">House number*</label>
        <input
          id="house-number"
          type="text"
          v-model="formData.location.houseNumber"
          placeholder="Enter house number"
          required
        />
      </div>
      <div>
        <label for="addition">Addition (optional)</label>
        <input
          id="addition"
          type="text"
          placeholder="e.g. A"
          v-model="formData.houseNumberAddition"
        />
      </div>
    </div>
    <div class="form-control">
      <label for="postal-code">Postal code*</label>
      <input
        id="postal-code"
        type="text"
        placeholder="e.g. 1000 AA"
        v-model="formData.location.zip"
        required
      />
    </div>
    <div class="form-control">
      <label for="city">City*</label>
      <input
        id="city"
        type="text"
        placeholder="e.g. Utrecht"
        v-model="formData.location.city"
        required
      />
    </div>
    <div>
      <label for="image">Upload picture (PNG or JPG)</label>
      <input type="file" :change="formData.image" id="image" required />
    </div>
    <div class="form-control">
      <label for="price">Price*</label>
      <input id="price" type="text" placeholder="e.g. €150.000" v-model="formData.price" required />
    </div>
    <div class="form-column">
      <div>
        <label for="size">Size*</label>
        <input id="size" type="text" placeholder="e.g. 60m2" v-model="formData.size" required />
      </div>
      <div>
        <label for="garage">Garage*</label>
        <select id="garage" v-model="formData.hasGarage" placeholder="Select" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
    <div class="form-column">
      <div>
        <label for="bedrooms">Bedrooms*</label>
        <input
          id="bedrooms"
          type="number"
          placeholder="Enter amount"
          v-model="formData.rooms.bedrooms"
          required
        />
      </div>
      <div>
        <label for="bathrooms">Bathrooms*</label>
        <input
          id="bathrooms"
          type="number"
          placeholder="Enter amount"
          v-model="formData.rooms.bathrooms"
          required
        />
      </div>
    </div>
    <div class="form-control">
      <label for="construction-date">Construction date*</label>
      <input
        id="construction-date"
        type="number"
        placeholder="e.g. 1990"
        v-model="formData.constructionYear"
        required
      />
    </div>
    <div class="form-control">
      <label for="description">Description*</label>
      <input
        id="description"
        type="text"
        placeholder="Enter description"
        v-model="formData.description"
        class="description-input"
        required
      />
    </div>
    <div class="post-button">
      <button type="submit">POST</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheForm',
  props: {
    formData: {
      type: Object,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      localFormData: { ...this.formData }
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.localFormData)
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = { ...newVal }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
form {
  margin-top: 2rem;
  margin-left: 18rem;
  max-width: 25rem;
  background-color: transparent;
}

.form-column {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  margin: 1rem 0;
}

.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  border-radius: 5px;
  border: none;
  height: 40px;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
  position: relative;
  padding: 12px;
}

input::placeholder {
  position: absolute;
  left: 12px;
}

.description-input {
  min-height: 100px;
  position: relative;
}

.description-input::placeholder {
  position: absolute;
  top: 12px;
}

select {
  width: auto;
}

button {
  padding: 0.4rem 4rem;
  border-radius: 8px;
  box-shadow: none;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.post-button {
  display: flex;
  justify-content: flex-end;
}
</style>

