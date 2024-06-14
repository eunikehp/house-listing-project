<template>
  <header>
    <nav>
      <div class="wrapper">
        <RouterLink to="/">
          <img alt="DTT logo" class="logo" src="@/assets/icons/img_logo_dtt@3x.png" height="32" />
        </RouterLink>
        <RouterLink to="/">Houses</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.wrapper {
  margin: auto;
  max-width: 80ch;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 500;
}
/* 
.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
