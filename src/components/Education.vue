<template>
  <div id="education" class="content">
    <h1 class="content-h1">
      {{ $t("message.education.title") }}
    </h1>
    <div>
      <h2>{{ $t("message.education.diploma") }}</h2>
      <div class="grid">
        <img alt="alkemy diploma" class="diploma" src="../assets/alkemy.jpg" />
        <img
          alt="acamica_digitalhouse diploma"
          class="diploma"
          src="../assets/acamica_digitalhouse.jpg"
        />
        <img
          alt="machine learning diploma"
          class="diploma"
          src="../assets/machine_learning.jpg"
        />
        <img
          alt="english b2 diploma"
          class="diploma"
          src="../assets/english_b2.jpg"
        />
        <img
          alt="mug_securecoding diploma"
          class="diploma"
          src="../assets/mug_securecoding.jpg"
        />
      </div>
    </div>
    <div class="margin-top">
      <h2>{{ $t("message.education.languages.title") }}</h2>
      <div class="grid">
        <div class="card">
          <p class="card-header">
            {{ $t("message.education.languages.spanish") }}
          </p>
          <p class="card-info">
            {{ $t("message.education.languages.native") }}
          </p>
        </div>
        <div class="card">
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

<style scoped lang="scss">
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  .grid {
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

  .card {
    width: 100%;
  }

  .margin-top {
    margin-top: 30px;
    width: 100%;
  }
}
</style>
