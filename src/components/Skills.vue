<template>
    <h2>{{ $t('message.skills.title') }}</h2>
    <div class='container'>
      <div>
        <h3>FRONT-END</h3>
        <ul>
          <li>HTML</li>
          <li>CSS - Sass</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React JS + Redux</li>
          <li>Vue.js + Vuex</li>
        </ul>
      </div>
      <div class='mLeft'>
      <h3>BACK-END</h3>
      <ul>
        <li>Node.js</li>
        <li>Python</li>
        <li>API</li>
        <li>SQL</li>
        <li>NoSQL</li>
      </ul>
    </div>
    <div class='mLeft'>
      <h3>{{ $t('message.skills.others') }}</h3>
      <ul>
        <li>SCRUM</li>
        <li>Git</li>
        <li>TypeScript</li>
        <li>BEST PRACTICIES</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped lang='scss'>
.container {
    display: flex;
    justify-content: flex-start;
    padding: 0;
  .mLeft {
    margin-left: 5rem;
  }
}
</style>
