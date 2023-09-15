<template>
  <div class="page">
    <div class="content">
      <h1 class="content-h1">{{ $t("message.technicalSkills.title") }}</h1>
      <div class="card">
        <h2 class="card-header">FRONTEND</h2>
        <ul>
          <li>Angular</li>
          <li>Bootstrap</li>
          <li>CSS + SCSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Routing</li>
          <li>Redux + Vuex + NgRx</li>
          <li>Tailwind</li>
          <li>Vue</li>
        </ul>
      </div>
      <div class="card">
        <h2 class="card-header">BACKEND</h2>
        <ul>
          <li>API</li>
          <li>AWS</li>
          <li>DNS</li>
          <li>GraphQL</li>
          <li>Nginx</li>
          <li>NoSQL</li>
          <li>Node</li>
          <li>SQL</li>
          <li>SSL</li>
          <li>Serverless</li>
          <li>Terraform</li>
        </ul>
      </div>
      <div class="card">
        <h2 class="card-header">{{ $t("message.technicalSkills.others") }}</h2>
        <ul>
          <li>Agile Methodologies</li>
          <li>Best Practicies</li>
          <li>Docker + Docker Compose</li>
          <li>Figma</li>
          <li>Git</li>
          <li>GitHub + GitLab + Bitbucket</li>
          <li>Jira</li>
          <li>Linux</li>
          <li>Postman</li>
          <li>Scrum</li>
          <li>Secure Coding</li>
          <li>TypeScript</li>
          <li>Unit Testing</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped lang="scss">
.content {
  grid-template-columns: repeat(3, 1fr);
  padding: 0 100px;

  ul {
    li {
      color: #1c1c1c;
      font-weight: 500;
      letter-spacing: 0.06em;
      line-height: 176%;
    }
  }
}
</style>
