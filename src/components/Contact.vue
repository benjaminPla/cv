<template>
  <h2>{{ $t('message.contact.title') }}</h2>
  <a href='https://www.linkedin.com/in/benjamin-pla/' target='_blank'>
    <i class="fab fa-linkedin"></i>
    <span>https://www.linkedin.com/in/benjamin-pla/</span>
  </a>
  <a href='mailto:benjaminpla.dev@gmail.com'>
    <i class="fas fa-envelope-square"></i>
    <span>benjaminpla.dev@gmail.com</span>
  </a>
  <a href='https://github.com/benjaminPla' target='_blank'>
    <i class="fa-brands fa-github-square"></i>
    <span>https://github.com/benjaminPla</span>
  </a>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped lang='scss'>
a {
    display: block;
    .fa-brands, .fab, .fas {
        margin-right: 0.5rem;
    }
}
</style>
