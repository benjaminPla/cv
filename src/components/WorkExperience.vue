<template>
  <h2>{{ $t("message.workExperience.title") }}</h2>
  <h3>2022/09 - {{ $t("message.workExperience.item1.title") }}</h3>
  <ul>
    <li>
      <span>
        {{ $t("message.workExperience.item1.description") }}
      </span>
      <a href="https://www.linkedin.com/company/southworks/" target="_blank">
        SOUTHWORKS
      </a>
      <ul class="subUl">
        <li>
          <span>{{ $t("message.workExperience.subUl.item1") }}</span>
          <a href="https://www.nba.com " target="_blank">NBA</a>
        </li>
        <li>
          <span>{{ $t("message.workExperience.subUl.item1") }}</span>
          <a href="https://www.7-eleven.com/" target="_blank">7 Eleven</a>
        </li>
      </ul>
    </li>
  </ul>
  <h3>2022/01 - 2022/09</h3>
  <ul>
    <li>
      <span>
        {{ $t("message.workExperience.item1.description") }}
      </span>
      <a href="https://www.linkedin.com/company/visma-latam/" target="_blank">
        VISMA LATAM
      </a>
      <ul class="subUl">
        <li>
          <span>{{ $t("message.workExperience.subUl.item1") }}</span>
          <a href="https://www.turecibo.com" target="_blank">Tu Recibo</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WorkExperience",
};
</script>

<style scoped lang="scss">
.subUl {
  li {
    font-size: 1.1rem;
    list-style-type: circle;
  }
}
@media (min-width: 650px) {
  .subUl {
    li {
      margin: 0 0 0 50px;
    }
  }
}
</style>
