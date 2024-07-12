<template>
  <div id="contact" class="content">
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
</template>

<style scoped lang="scss">
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  .grid {
    align-items: center;
    display: grid;
    gap: 30px;
    grid-template-columns: auto 1fr;
    justify-content: center;
    padding: 50px;

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

  span:hover {
    box-shadow: inset 0 -2px #62a77d;
  }
}
</style>
