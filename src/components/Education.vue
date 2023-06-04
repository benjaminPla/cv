<template>
  <h2>{{ $t("message.education.title") }}</h2>
  <h3>{{ $t("message.education.diploma") }}</h3>
  <ul>
    <li>
      2022 - MUG (Secure Coding)
      <i @click="toggleDiploma('mug')" class="anchor fa-solid fa-image"></i>
    </li>
    <li>
      2021 -
      <a href="https://www.linkedin.com/school/acamica/" target="_blank">
        ACAMICA
      </a>
      +
      <a
        href="https://www.linkedin.com/school/digitalhouseschool/"
        target="_blank"
      >
        DIGITAL HOUSE
      </a>
      (Fullstack)
      <i @click="toggleDiploma('acamica')" class="anchor fa-solid fa-image"></i>
    </li>
    <li>
      2021 -
      <a href="https://www.linkedin.com/company/alkemy2020/" target="_blank">
        ALKEMY
      </a>
      (Fullstack (React + Node))
      <i @click="toggleDiploma('alkemy')" class="anchor fa-solid fa-image"></i>
    </li>
  </ul>
  <Popup v-if="diploma" @close="diploma = 0" :img="diploma" />
  <h3>{{ $t("message.education.languages.title") }}</h3>
  <ul>
    <li>{{ $t("message.education.languages.spanish") }}</li>
    <li>
      <span>
        {{ $t("message.education.languages.english") }}
        <i
          @click="toggleDiploma('english')"
          class="anchor fa-solid fa-image"
        ></i>
      </span>
    </li>
    <li>{{ $t("message.education.languages.italian") }}</li>
  </ul>
</template>

<script>
import { ref } from "vue";
import Popup from "./Popup.vue";
import mugImg from "../assets/mug_securecoding.jpg";
import acamicaImg from "../assets/acamica_digitalhouse.jpg";
import alkemyImg from "../assets/alkemy.jpg";
import englishImg from "../assets/english_b2.jpg";

export default {
  name: "Education",
  components: { Popup },
  setup() {
    /* eslint-disable */
    const diploma = ref("");
    const toggleDiploma = (diplomaName) => {
      switch (diplomaName) {
        case "mug":
          diploma.value = {
            src: mugImg,
            alt: "MUG Secure Coding Diploma",
          };
          break;
        case "acamica":
          diploma.value = {
            src: acamicaImg,
            alt: "Acamica + Digital House Fullstack Diploma",
          };
          break;
        case "alkemy":
          diploma.value = { src: alkemyImg, alt: "Alkemy Fullstack Diploma" };
          break;
        case "english":
          diploma.value = { src: englishImg, alt: "English B2 Diploma" };
          break;
      }
    };
    return { diploma, toggleDiploma };
    /* eslint-enable */
  },
};
</script>

<style scoped lang="scss">
svg {
  width: 20.16px;
  height: 23px;
}
</style>
