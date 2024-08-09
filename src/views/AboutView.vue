<template>
  <div class="container">
    <div class="about-section">
      <h1>About DTT Real Estate</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et aliquam in numquam
        asperiores velit impedit voluptatem ad officiis doloribus nam, eaque excepturi earum
        pariatur dignissimos sint placeat quasi porro.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et aliquam in numquam
        asperiores velit impedit voluptatem ad officiis doloribus nam, eaque excepturi earum
        pariatur dignissimos sint placeat quasi porro.
      </p>
    </div>
    <div class="design-section">
      <h1>Design and Development</h1>
      <div class="company-info">
        <img alt="DTTlogo" src="@/assets/icons/img_logo_dtt@3x.png" height="60" />
        <div>
          <p>By DTT</p>
          <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section,
.design-section {
  margin-top: 50px;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 40px;
}

.design-section h1 {
  margin-bottom: 20px;
}

a {
  color: var(--dtt-c-text-hyperlink);
}

@media screen and (max-width: 600px) {
  .about {
    margin-top: 3rem;
    margin-left: 5rem;
    max-width: 27rem;
  }
}

@media screen and (max-width: 1080px) and (min-width: 600px) {
  .about {
    margin-top: 3rem;
    margin-left: 12rem;
    max-width: 27rem;
  }
}
</style>
