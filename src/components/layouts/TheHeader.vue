<template>
  <header>
    <nav>
      <div class="wrapper">
        <router-link to="/">
          <img alt="DTT logo" class="logo" src="@/assets/icons/img_logo_dtt@3x.png" height="32" />
        </router-link>
        <router-link to="/">Houses</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: var(--dtt-c-background-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 100px rgba(0, 0, 0, 0.2);
  padding-left: 10rem;
}

.wrapper {
  margin: auto;
  max-width: 80ch;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 500;
}
</style>