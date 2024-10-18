<template>
  <div>
    <button class="by-price" @click="sortHouses('price')">Price</button>
    <button class="by-city" @click="sortHouses('city')">City</button>
    <button class="by-size" @click="sortHouses('size')">Size</button>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['houses', 'filteredHouses'])
  },
  methods: {
    // sort house by price and size
    sortHouses(option) {
      this.sortOption = option
      if (option === 'price') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => a.price - b.price)
        )
      } else if (option === 'size') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => a.size - b.size)
        )
      } else if (option === 'city') {
        this.$store.commit(
          'SET_FILTERED_HOUSES',
          [...this.filteredHouses].sort((a, b) => {
            const cityA = a.location.city.toUpperCase() // ignore upper and lowercase
            const cityB = b.location.city.toUpperCase() // ignore upper and lowercase
            if (cityA < cityB) {
              return -1
            }
            if (cityA > cityB) {
              return 1
            }
            return 0 // names must be equal
          })
        )
      }
    }
  }
}
</script>


<style scoped>
.by-price,
.by-size,
.by-city {
  padding: 0.5rem 3.5rem;
  height: 3.5rem;
  font-size: 1.2rem;
  background-color: var(--dtt-c-tertiary-2);
  border-color: var(--dtt-c-tertiary-2);
}

.by-price:focus,
.by-size:focus,
.by-city:focus {
  background-color: var(--dtt-c-primary);
  border-color: var(--dtt-c-primary);
}

.by-price {
  border-radius: 0.5rem 0 0 0.5rem;
}

.by-size {
  border-radius: 0 0.5rem 0.5rem 0;
}
</style>