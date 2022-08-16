<template>
  <h2>{{ $t('message.education.title') }}</h2>
  <h3>{{ $t('message.education.diploma') }}</h3>
  <ul>
    <li>
      2021 -
      <a href='https://www.linkedin.com/school/acamica/' target='_blank'>
        ACAMICA
      </a>
      +
      <a href='https://www.linkedin.com/school/digitalhouseschool/' target='_blank'>
        DIGITAL HOUSE
      </a>
      (Fullstack)
      <i @click='toggleAcamica' class='anchor fa-solid fa-square-arrow-up-right'></i>
    </li>
    <li>
      2021 -
      <a href='https://www.linkedin.com/company/alkemy2020/' target='_blank'>
        ALKEMY
      </a>
      (Fullstack (React + Node))
      <i @click='toggleAlkemy' class='anchor fa-solid fa-square-arrow-up-right'></i>
    </li>
  </ul>
  <Popup v-if='diploma' @close='diploma = 0' :img='diploma'/>
  <h3>{{ $t('message.education.languages.title') }}</h3>
  <ul>
    <li>{{ $t('message.education.languages.spanish') }}</li>
    <li>
        <span>
            {{ $t('message.education.languages.english') }}
            <i @click='toggleEnglish' class='anchor fa-solid fa-square-arrow-up-right'></i>
        </span>
    </li>
    <li>{{ $t('message.education.languages.italian') }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue';
import Popup from './Popup.vue';
import acamicaImg from '../assets/acamica_digitalhouse.jpg';
import alkemyImg from '../assets/alkemy.jpg';
import englishImg from '../assets/english_b2.jpg';

export default {
  name: 'Education',
  components: { Popup },
  setup() {
    /* eslint-disable */
    const diploma = ref('');
    const toggleAcamica = () => diploma.value = { src: acamicaImg, alt: 'Acamica + Digital House Fullstack Diploma' };
    const toggleAlkemy = () => diploma.value = { src: alkemyImg, alt: 'Alkemy Fullstack Diploma' };
    const toggleEnglish = () => diploma.value = { src: englishImg, alt: 'English B2 Diploma' };
    return { diploma, toggleAcamica, toggleAlkemy, toggleEnglish };
    /* eslint-enable */
  },
};
</script>

<style scoped lang='scss'>
svg {
  width: 20.16px;
  height: 23px;
}
</style>
