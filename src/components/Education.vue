<template>
  <div class="content">
    <h1 class="content-h1">
      {{ $t("message.education.title") }}
    </h1>
    <div>
      <h2>{{ $t("message.education.diploma") }}</h2>
      <div class="diplomas-grid">
        <img
          alt="mug_securecoding diploma"
          class="diploma"
          src="../assets/mug_securecoding.jpg"
        />
        <img
          alt="acamica_digitalhouse diploma"
          class="diploma"
          src="../assets/acamica_digitalhouse.jpg"
        />
        <img alt="alkemy diploma" class="diploma" src="../assets/alkemy.jpg" />
      </div>
    </div>
    <div>
      <h2>{{ $t("message.education.languages.title") }}</h2>
      <div class="card">
        <p class="card-header">
          {{ $t("message.education.languages.spanish") }}
        </p>
        <p class="card-info">
          {{ $t("message.education.languages.native") }}
        </p>
      </div>
      <div class="card card-hover" @click="handleDiplomaClick('english')">
        <p class="card-header">
          {{ $t("message.education.languages.english") }}
        </p>
        <p class="card-info">
          {{ $t("message.education.languages.intermadiateHigh") }}
        </p>
      </div>
      <div class="card">
        <p class="card-header">
          {{ $t("message.education.languages.italian") }}
        </p>
        <p class="card-info">
          {{ $t("message.education.languages.intermadiate") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleDiplomaClick = (diploma: string): void => {
  window.open(`../assets/${diploma}`, "_blank");
};
</script>

<style scoped lang="scss">
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  .diplomas-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    width: 100%;
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 49px;
    color: #1c1c1c;
  }

  .diploma {
    border-radius: 20px;
    width: 100%;
  }
}
</style>
