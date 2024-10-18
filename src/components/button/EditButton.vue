<template>
  <img
    class="card-icon"
    alt="edit"
    src="@/assets/icons/ic_edit@3x.png"
    height="15px"
    @click.stop="editListing"
  />
</template>

<script>
export default {
  props: ['id'],
  methods: {
    editListing() {
      this.$router.push({ name: 'EditListing', params: { id: this.id } })
    }
  }
}
</script>

<style scoped>
.card-icon {
  height: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  align-self: center;
}
</style>