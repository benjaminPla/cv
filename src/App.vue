<template>
  <div class="main-container">
    <Header />
    <Profile />
    <Education />
    <TechnicalSkills />
    <WorkExperience />
    <Contact />
  </div>
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

.main-container {
  background-color: #e3e3e3;
  padding: 0 15vw;
}
</style>
