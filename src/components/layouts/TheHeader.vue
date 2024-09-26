<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <img alt="DTT logo" class="logo" src="@/assets/icons/img_logo_dtt@3x.png" height="35" />
          </router-link>
        </li>
        <li><router-link to="/">Houses</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: var(--dtt-c-background-2);
  height: 6.4rem;
  box-shadow: 0 5px 100px rgba(165, 165, 165, 0.2);
}

nav {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  max-width: 100rem;
  font-weight: 500;
  padding-top: 1.3rem;
}

nav ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 7rem;
  justify-content: center;
  align-items: center;
  list-style: none;
}

nav a:link {
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--dtt-c-tertiary-2);
}

nav a.router-link-exact-active {
  color: var(--dtt-c-text-primary);
  font-weight: 700;
  padding-left: 0;
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