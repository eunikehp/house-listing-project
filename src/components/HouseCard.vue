<template>
  <div>
    <a class="card">
      <div class="house-image">
        <img alt="image" :src="image" height="100" />
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
        <img src="@/assets/icons/ic_edit@3x.png" height="12px" />
      </div>
      <div class="icon-details">
        <img src="@/assets/icons/ic_delete@3x.png" height="12px" />
      </div>
    </a>
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
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  background-color: var(--dtt-c-background-2);
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