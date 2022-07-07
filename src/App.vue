<template>
  <div class='grid'>
    <div class='container'>
      <Picture />
    </div>
    <div class='container gray'>
      <Headers />
    </div>
    <div class='container'>
      <Profile />
    </div>
    <div class='container gray'>
      <Skills />
    </div>
    <div class='container'>
      <Contact />
    </div>
    <div class='container gray'>
      <work-experience />
    </div>
    <div class='container'>
      <References />
    </div>
    <div class='container gray'>
      <Education />
    </div>
  </div>
</template>

<script>
import Picture from './components/Picture.vue';
import Headers from './components/Headers.vue';
import Profile from './components/Profile.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Contact from './components/Contact.vue';
import References from './components/References.vue';
import WorkExperience from './components/WorkExperience.vue';

export default {
  name: 'App',
  components: {
    Picture,
    Headers,
    Profile,
    Skills,
    Education,
    Contact,
    References,
    WorkExperience,
  },
};
</script>

<style lang='scss'>
@import './assets/main';

.container {
  padding: 15px;
  border-radius: 20px;
  margin: 5px;
}
.gray {
  background-color: #ececec;
}
@media (min-width: 401px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>