<template>
  <h2>REFERENCES</h2>
  <ul>
    <li>CUMPA EMMANUEL</li>
    <li>
      <a href='mailto:emmanuel.cumpa@gmail.com'>
        <i class="fas fa-envelope-square"></i>
        <span>emmanuel.cumpa@gmail.com</span>
      </a>
    </li>
  </ul>
  <ul class='mTop'>
    <li>QUIROGA SEBASTIAN IGNACIO</li>
    <li>
      <a href='mailto:squiroga@gcacontadores.com.ar'>
        <i class="fas fa-envelope-square"></i>
        <span>squiroga@gcacontadores.com.ar</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'References',
};
</script>

<style scoped lang='scss'>
.mTop {
  margin-top: .5rem;
}
a {
  display: block;
  .fab, .fas {
    margin-right: 0.5rem;
  }
}
a:hover  {
  cursor: pointer;
  color: #000;
}
</style>