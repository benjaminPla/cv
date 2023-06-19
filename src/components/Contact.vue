<template>
  <div class="page">
    <div class="content">
      <h1 class="content-h1">{{ $t("message.contact.title") }}</h1>
      <div class="card">
        <div class="grid">
          <i class="fa-brands fa-linkedin-in"></i>
          <a href="https://www.linkedin.com/in/benjamin-pla/" target="_blank">
            <span>linkedin.com/in/benjamin-pla</span>
          </a>
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:benjaminpla.dev@gmail.com">
            <span>benjaminpla.dev@gmail.com</span>
          </a>
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/benjaminPla" target="_blank">
            <span>github.com/benjaminPla</span>
          </a>
        </div>
      </div>
    </div>
    <footer>
      <p>
        {{ $t("message.contact.footer") }} |
        <a href="https://www.linkedin.com/in/nailiarmeri" target="_blank">
          <span>https://www.linkedin.com/in/nailiarmeri</span>
        </a>
      </p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: grid;
  grid-template-rows: 1fr auto;

  .content {
    position: relative;
  }
}

.card {
  grid-column: span 3;
}

.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  padding: 30px 100px;
  justify-content: center;
  align-items: center;

  i {
    font-size: 25px;
  }

  a {
    font-weight: 500;
    font-size: 20px;
    line-height: 151.9%;
    letter-spacing: 0.06em;
    color: #000000;
    display: inline-block;
  }
}

footer {
  background: #d9d9d9;
  color: #1c1c1c;
  font-family: "Muli";
  font-size: 12px;
  font-weight: 700;
  grid-row: 2;
  letter-spacing: 0.15em;
  line-height: 15px;
  margin: 20px;
  padding: 10px;
  text-align: center;
  z-index: 100;
}

span:hover {
  box-shadow: inset 0 -2px #62a77d;
}
</style>
