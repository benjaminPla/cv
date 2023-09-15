<template>
  <div @click="displayLanguages = !displayLanguages">
    <i class="hover fa-regular fa-globe"></i>
    <ul v-if="displayLanguages" class="languages">
      <li class="anchor" @click="$i18n.locale = 'en'">
        {{ $t("message.changeLanguage.languages.english") }}
      </li>
      <li class="anchor" @click="$i18n.locale = 'es'">
        {{ $t("message.changeLanguage.languages.spanish") }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

const displayLanguages: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
.hover:hover {
  cursor: pointer;
}
.languages {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  right: 45px;
  top: 50px;
  li {
    padding: 5px 10px;
  }
  li:hover {
    background-color: #ddd;
  }
}
</style>
