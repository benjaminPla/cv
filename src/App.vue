<template>
  <Header />
  <Profile />
  <Education />
  <TechnicalSkills />
  <WorkExperience />
  <Contact />
</template>

<script setup>
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Education from "./components/Education.vue";
import TechnicalSkills from "./components/TechnicalSkills.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Contact from "./components/Contact.vue";
</script>

<style>
@import "./assets/_main.scss";
</style>
