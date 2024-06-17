<template>
  <div>
    <a class="house-card" @click="$emit('click')">
      <div class="house-image">
        <img alt="Houe Image" :src="image" height="100" />
      </div>
      <div class="description">
        <h3>{{ location.street }} {{ location.houseNumber }}</h3>
        <p>&#8364; {{ price }}</p>
        <p>{{ location.zip }} {{ location.city }}</p>
        <div class="icons">
          <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" /><span>{{ rooms.bedrooms }}</span>
          <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" /><span>{{
            rooms.bathrooms
          }}</span>
          <img alt="size " src="@/assets/icons/ic_size@3x.png" /><span>{{ size }}m2</span>
        </div>
      </div>
      <div class="icon-details">
        <img src="@/assets/icons/ic_edit@3x.png" height="12px" @click="editListing" />
      </div>
      <div class="icon-details">
        <img src="@/assets/icons/ic_delete@3x.png" height="12px" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HouseCard',
  props: {
    id: Number,
    image: String,
    rooms: Object,
    location: Object,
    price: Number,
    size: Number
  },
  methods: {
    editListing() {
      this.$router.push({ name: 'EditListing' })
    }
  }
}
</script>

<style scoped>
.house-card {
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  background-color: var(--dtt-c-background-2);
  cursor: pointer;
}

.house-image {
  margin-right: 1rem;
  width: 100px;
  height: 100px;
}

.house-image img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  text-align: left;
  width: 37rem;
}

.description h3,
p {
  margin-bottom: 5px;
}

.icons img,
span {
  margin-right: 15px;
  height: 1rem;
}

.icon-details {
  margin-right: 20px;
  height: 1rem;
  cursor: pointer;
}
</style>