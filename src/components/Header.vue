<template>
  <div class="container">
    <ul>
      <li>
        <a href="#profile">
          {{ $t("message.profile.title") }}
        </a>
      </li>
      <li>
        <a href="#education">
          {{ $t("message.education.title") }}
        </a>
      </li>
      <li>
        <a href="#technicalSkills">
          {{ $t("message.technicalSkills.title") }}
        </a>
      </li>
      <li>
        <router-link to="/work-experience" active-class="active-link">
          {{
            $t(
              "message.workExperienceAndReferences.titleWorkExperienceAndReferences",
            )
          }}
        </router-link>
      </li>
      <li>
        <router-link to="/contact" active-class="active-link">
          {{ $t("message.contact.title") }}
        </router-link>
      </li>
      <li class="last" @click="displayLanguagesMenu = !displayLanguagesMenu">
        <p>
          <span>{{
            $i18n.locale === "en"
              ? $t("message.education.languages.english")
              : $t("message.education.languages.spanish")
          }}</span
          ><i class="fa-solid fa-caret-down"></i>
        </p>
      </li>
    </ul>
    <ul class="languages" v-if="displayLanguagesMenu">
      <li @click="($i18n.locale = 'es'), (displayLanguagesMenu = false)">
        {{ $t("message.education.languages.spanish") }}
      </li>
      <li @click="($i18n.locale = 'en'), (displayLanguagesMenu = false)">
        {{ $t("message.education.languages.english") }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

const displayLanguagesMenu: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
.container {
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 10;

  ul {
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 40px;
    justify-content: center;
    padding: 20px 15px;
    position: absolute;
    width: 100%;
    z-index: 100;

    li {
      color: #000000;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: -0.05em;
      line-height: 18px;
      text-transform: uppercase;
    }

    .last {
      position: absolute;
      right: 15px;

      span {
        margin: 0 3px 0 0;
      }
    }

    li:hover,
    .active-link {
      cursor: pointer;
      box-shadow: inset 0 -2px #62a77d;
    }
  }

  .languages {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 4px 4px;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: auto;
    right: 0;
    top: 60px;
  }
}
</style>
