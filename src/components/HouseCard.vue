<template>
  <div>
    <div>
      <a class="card">
        <div class="sample-image">
          <img alt="image" :src="image" height="100" />
        </div>
        <div class="description">
          <h3>{{ location.street }} {{ location.houseNumber }}</h3>
          <p>&#8364; {{ price }}</p>
          <p>{{ location.zip }} {{ location.city }}</p>
          <div>
            <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" height="12rem" />{{
              rooms.bedrooms
            }}
            <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" height="12rem" />{{
              rooms.bathrooms
            }}
            <img alt="size " src="@/assets/icons/ic_size@3x.png" height="12rem" /> {{ size }}m2
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    rooms: {
      type: Object,
      required: true
    },
    location: {
      type: Object,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: flex;
  flex-direction: row;
}

.sample-image {
  margin-right: 1rem;
}
</style>