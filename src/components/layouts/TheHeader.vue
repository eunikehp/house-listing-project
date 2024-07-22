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
  height: 4rem;
  background-color: var(--dtt-c-background-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 100px rgba(165, 165, 165, 0.2);
  /* padding-left: 10rem; */
}

.wrapper {
  margin: auto;
  max-width: 10rem;
  text-align: left;
  display: flex;
  align-items: center;
  /* padding: 1rem; */
  font-weight: 500;
}

nav {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding: 30px;
}

nav a:link {
  font-weight: 500;
  padding: 0 1.5rem;
  color: var(--dtt-c-tertiary-2);
}

nav a.router-link-exact-active {
  color: var(--dtt-c-text-primary);
  font-weight: 700;
}

@media (max-width: 600px) {
  .wrapper {
    margin: auto;
    text-align: left;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  header {
    padding-left: 0;
    margin: auto;
  }
}
</style>