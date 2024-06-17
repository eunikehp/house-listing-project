<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="street-name">Street name</label>
      <input
        id="street-name"
        type="text"
        v-model="formData.location.street"
        placeholder="Enter the street name"
        required
      />
    </div>
    <div>
      <div class="form-control">
        <label for="house-number">House number</label>
        <input
          id="house-number"
          type="text"
          v-model="formData.location.houseNumber"
          placeholder="Enter house number"
          required
        />
      </div>
      <div class="form-control">
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
      <label for="postal-code">Postal code</label>
      <input
        id="postal-code"
        type="text"
        placeholder="e.g. 1000 AA"
        v-model="formData.location.zip"
        required
      />
    </div>
    <div class="form-control">
      <label for="city">City</label>
      <input
        id="city"
        type="text"
        placeholder="e.g. Utrecht"
        v-model="formData.location.city"
        required
      />
    </div>
    <div>
      <label for="image">Image URL:</label>
      <input type="text" v-model="formData.image" id="image" required />
    </div>
    <div class="form-control">
      <label for="price">Price</label>
      <input id="price" type="text" placeholder="e.g. €150.000" v-model="formData.price" required />
    </div>
    <div>
      <div class="form-control">
        <label for="size">Size</label>
        <input id="size" type="text" placeholder="e.g. 60m2" v-model="formData.size" required />
      </div>
      <div class="form-control">
        <label for="garage">Garage</label>
        <select id="garage" v-model="formData.hasGarage" placeholder="Select" required>
          <option value="google">Google</option>
          <option value="wom">Word of mouth</option>
          <option value="newspaper">Newspaper</option>
        </select>
      </div>
    </div>
    <div>
      <div class="form-control">
        <label for="bedrooms">Bedrooms</label>
        <input
          id="bedrooms"
          type="number"
          placeholder="Enter amount"
          v-model="formData.rooms.bedrooms"
          required
        />
      </div>
      <div class="form-control">
        <label for="bathrooms">Bathrooms</label>
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
      <label for="construction-date">Construction date</label>
      <input
        id="construction-date"
        type="number"
        placeholder="e.g. 1990"
        v-model="formData.constructionYear"
        required
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="Enter description"
        v-model="formData.description"
        required
      />
    </div>
    <div>
      <button type="submit">POST</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheForm',
  props: ['formData', 'onSubmit'],
  methods: {
    submitForm() {
      this.onSubmit()
    }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
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
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>

