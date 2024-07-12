<template>
  <div id="technicalSkills" class="content">
    <h1 class="content-h1">{{ $t("message.technicalSkills.title") }}</h1>
    <div class="grid">
      <div class="card">
        <h2 class="card-header">FRONTEND</h2>
        <ul>
          <li>Angular</li>
          <li>Bootstrap</li>
          <li>CSS + SCSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Redux + Vuex + NgRx</li>
          <li>Routing</li>
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
          <li>Next.js</li>
          <li>Nginx</li>
          <li>Node</li>
          <li>NoSQL</li>
          <li>Serverless</li>
          <li>SQL</li>
          <li>SSL</li>
          <li>Terraform</li>
        </ul>
      </div>
      <div class="card">
        <h2 class="card-header">{{ $t("message.technicalSkills.others") }}</h2>
        <ul>
          <li>Agile Methodologies</li>
          <li>Authentication</li>
          <li>Authorization</li>
          <li>Best Practicies</li>
          <li>Docker + Docker Compose</li>
          <li>Figma</li>
          <li>GitHub + GitLab + Bitbucket</li>
          <li>Git</li>
          <li>Jira</li>
          <li>Linux</li>
          <li>OIDC + OAuth 2.0</li>
          <li>Postman</li>
          <li>SAML</li>
          <li>Scrum</li>
          <li>Secure Coding</li>
          <li>SSO</li>
          <li>TypeScript</li>
          <li>Unit Testing</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    width: 100%;

    ul {
      li {
        color: #1c1c1c;
        font-weight: 500;
        letter-spacing: 0.06em;
        line-height: 176%;
      }
    }
  }
}
</style>
