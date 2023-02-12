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
    </li>
  </ul>
  <h3>2022 - 2022/09</h3>
  <ul>
    <li>
      <span>
        {{ $t("message.workExperience.item1.description") }}
      </span>
      <a href="https://www.linkedin.com/company/visma-latam/" target="_blank">
        VISMA LATAM
      </a>
    </li>
  </ul>
  <h3>2014 - 2021</h3>
  <ul>
    <li>{{ $t("message.workExperience.item2.description") }}</li>
  </ul>
  <h3>2011 - 2014</h3>
  <ul>
    <li>{{ $t("message.workExperience.item3.description") }}</li>
  </ul>
</template>

<script>
export default {
  name: "WorkExperience",
};
</script>
