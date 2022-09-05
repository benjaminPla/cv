<template>
    <h2>{{ $t('message.skills.title') }}</h2>
    <div class='container'>
      <div>
        <h3>FRONTEND</h3>
        <ul>
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Vue</li>
        </ul>
      </div>
      <div class='mLeft'>
      <h3>BACKEND</h3>
      <ul>
        <li>API</li>
        <li>Node</li>
        <li>NoSQL</li>
        <li>PHP <span class='italic'>(basic)</span></li>
        <li>Python <span class='italic'>(basic)</span></li>
        <li>SQL</li>
      </ul>
    </div>
    <div class='mLeft'>
      <h3>{{ $t('message.skills.others') }}</h3>
      <ul>
        <li>Best Practicies</li>
        <li>Docker</li>
        <li>Git</li>
        <li>Linux</li>
        <li>Scrum</li>
        <li>Secure Coding</li>
        <li>TypeScript</li>
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
@media (min-width: 650px) {
    .container {
        display: flex;
        justify-content: flex-start;
        padding: 0;
        .italic {
            font-style: italic;
        }
        .mLeft {
            margin-left: 5rem;
        }
    }
}
</style>
