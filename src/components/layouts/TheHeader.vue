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
  background-color: var(--dtt-c-background-2);
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 4rem;
  padding: 0 180px;
  box-shadow: 0 5px 100px rgba(165, 165, 165, 0.2);
}

.wrapper {
  margin: auto;
  /* max-width: 10rem; */
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: 500;
}

nav {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding: 30px;
}

nav a:link {
  font-weight: 500;
  font-size: 18px;
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