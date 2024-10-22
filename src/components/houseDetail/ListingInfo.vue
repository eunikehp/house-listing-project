<template>
  <div class="listing-info">
    <ul>
      <li>
        <img alt="location" src="@/assets/icons/ic_location@3x.png" />{{ house.location.zip }}
        {{ house.location.city }}
      </li>
      <li>
        <img alt="price" src="@/assets/icons/ic_price@3x.png" /><span>{{ house.price }}</span>
        <img alt="size" src="@/assets/icons/ic_size@3x.png" /><span>{{ house.size }} m2</span>
        <img alt="construction" src="@/assets/icons/ic_construction_date@3x.png" /><span
          >Built in {{ house.constructionYear }}</span
        >
      </li>
      <li>
        <img alt="bedrooms" src="@/assets/icons/ic_bed@3x.png" /><span>{{
          house.rooms.bedrooms
        }}</span>
        <img alt="bathrooms" src="@/assets/icons/ic_bath@3x.png" /><span>{{
          house.rooms.bathrooms
        }}</span>
        <img alt="garage" src="@/assets/icons/ic_garage@3x.png" /><span>{{ house.hasGarage }}</span>
      </li>
    </ul>
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit libero a
    pellentesque accumsan. In enim metus, congue vitae elit vitae, venenatis hendrerit diam. Duis
    eget rutrum elit. Nullam elit odio, condimentum nec imperdiet vel, sollicitudin nec lorem.
    Maecenas fringilla, neque vitae pellentesque gravida.
  </p>
</template>

<script>
export default {
  props: ['house']
}
</script>

<style scoped>
.listing-info {
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dtt-c-text-secondary);
}

.listing-info ul {
  list-style: none;
  padding: 0;
}

.listing-info li {
  margin-bottom: 1rem;
}

.listing-info img,
span {
  margin-right: 1.5rem;
  height: 1.5rem;
}

p {
  line-height: 1.7;
}
</style>