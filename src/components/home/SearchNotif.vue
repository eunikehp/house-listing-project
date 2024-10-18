<template>
  <!-- A notif if houses have been found -->
  <div v-if="showResult" class="results">
    <h2>{{ totalResults }} {{ results }} found</h2>
  </div>

  <!-- If no result -->
  <div v-if="showEmptyHouses" class="no-results">
    <img alt="no-results" src="@/assets/icons/img_empty_houses@3x.png" height="150px" /><span
      >No results found. <br />Please try another keyword.</span
    >
  </div>
</template>

<script>
export default {
  props: {
    showResult: Boolean,
    totalResults: Number,
    showEmptyHouses: Boolean
  },
  computed: {
    results() {
      return this.totalResults > 1 ? 'results' : 'result'
    }
  }
}
</script>


<style scoped>
.results {
  margin-top: 2rem;
}

.no-results {
  flex-direction: column;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
}
</style>