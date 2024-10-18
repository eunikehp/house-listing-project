<template>
  <button class="create-new-button" @click="goToCreateListing">CREATE NEW</button>
</template>

<script>
export default {
  methods: {
    // go to 'create a new listing 'page'
    goToCreateListing() {
      this.$router.push({ name: 'CreateListing' })
    }
  }
}
</script>

<style scoped>
.create-new-button {
  background: url('@/assets/icons/ic_plus_white@3x.png') no-repeat 15px center;
  background-color: var(--dtt-c-primary);
  background-size: 1.3rem 1.3rem;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.8rem 2rem 0.8rem 4rem;
}
</style>