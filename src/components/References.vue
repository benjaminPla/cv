<template>
  <h2>{{ $t("message.references.title") }}</h2>
  <ul>
    <li>Fernandez Ponce Ezequiel</li>
    <li>
      <a href="mailto:info@ezfepo.com">
        <i class="fas fa-envelope-square"></i>
        <span>info@ezfepo.com</span>
      </a>
    </li>
  </ul>
  <ul class="mTop">
    <li>Cumpa Emmanuel</li>
    <li>
      <a href="mailto:emmanuel.cumpa@gmail.com">
        <i class="fas fa-envelope-square"></i>
        <span>emmanuel.cumpa@gmail.com</span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.mTop {
  margin-top: 0.5rem;
}
a {
  display: block;
  .fab,
  .fas {
    margin-right: 0.5rem;
  }
}
a:hover {
  cursor: pointer;
  color: #000;
}
</style>
