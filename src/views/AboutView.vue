<template>
  <div class="about">
    <h1>About DTT Real Estate</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et aliquam in numquam
      asperiores velit impedit voluptatem ad officiis doloribus nam, eaque excepturi earum pariatur
      dignissimos sint placeat quasi porro.
      <br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et aliquam in numquam
      asperiores velit impedit voluptatem ad officiis doloribus nam, eaque excepturi earum pariatur
      dignissimos sint placeat quasi porro.
    </p>

    <h1>Design and Development</h1>
    <div class="company">
      <img alt="DTTlogo" src="@/assets/icons/img_logo_dtt@3x.png" height="40" />
      <div>
        <p>By DTT</p>
        <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    max-width: 50rem;
    margin: 1rem auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .company {
    display: flex;
    flex: row;
  }

  .company div {
    margin-left: 20px;
  }
}
</style>
