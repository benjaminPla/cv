<template>
  <div class="page">
    <div class="content">
      <div>
        <h2>{{ $t("message.education.diploma") }}</h2>
        <div class="card card-hover" @click="handleDiplomaClick('mug')">
          <p class="card-header">2022</p>
          <p class="card-info">Secure Coding</p>
          <p class="card-more">MUG</p>
        </div>
        <div
          class="card card-hover"
          @click="handleDiplomaClick('acamicaDigitalHouse')"
        >
          <p class="card-header">2021</p>
          <p class="card-info">Fullstack</p>
          <p class="card-more">ACAMICA + DIGITAL HOUSE</p>
        </div>
        <div class="card card-hover" @click="handleDiplomaClick('alkemy')">
          <p class="card-header">2021</p>
          <p class="card-info">Fullstack</p>
          <p class="card-more">ALKEMY</p>
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
  </div>
</template>

<script setup lang="ts">
const handleDiplomaClick = (diploma: string): void => {
  window.open(`https://benjaminpla.com/${diploma}.jpg`, "_blank");
};
</script>

<style scoped lang="scss">
.content {
  grid-template-columns: 300px 300px;

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 49px;
    color: #1c1c1c;
  }
}
</style>
