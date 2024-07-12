<template>
  <div id="workExperienceAndReferences" class="content">
    <h1 class="content-h1">
      {{ $t("message.workExperienceAndReferences.titleWorkExperience") }}
    </h1>
    <div class="grid">
      <div class="card">
        <h2 class="card-header">2022/01 - 2022/09</h2>
        <a href="https://www.visma.com/" target="_blank">
          <svg viewBox="0 0 112.025 20.8">
            <g transform="translate(38.701 0.088)">
              <path
                d="M11.987,3.5c6.14.526,12.805,3.6,16.664,7.981,4.912,5.613,3.245,11.227-3.771,12.542S8.215,21.831,3.3,16.218C-.468,11.92-.38,7.622,3.04,5.254L22.511,19.638Z"
                transform="translate(-39.176 -3.588)"
                fill="#f01245"
              ></path>
              <path
                d="M121.725,24.136l-2.456-9.823a24.837,24.837,0,0,1-.7-3.508h-.088a25.686,25.686,0,0,1-.614,3.6l-2.456,9.736H111.2L116.9,3.7h3.333l5.876,20.436Z"
                transform="translate(-52.787 -3.612)"
                fill="currentColor"
              ></path>
              <path
                d="M48.9,3.6l2.456,9.823a24.836,24.836,0,0,1,.7,3.508h.088a25.686,25.686,0,0,1,.614-3.6L55.213,3.6h4.21L53.809,24.124H50.476L44.6,3.6Z"
                transform="translate(-44.6 -3.6)"
                fill="currentColor"
              ></path>
              <path
                d="M69.035,3.6V24.124H65V3.6Z"
                transform="translate(-47.108 -3.6)"
                fill="currentColor"
              ></path>
              <path
                d="M94.692,3.6l2.017,12.1h0L98.376,3.6h5.438l2.1,20.436H101.8L100.832,9.3h-.088l-.614,5.087-1.754,9.648H95.218L93.2,14.213l-.7-4.561V9.3h-.088l-.526,14.823H87.5L89.254,3.688h5.438Z"
                transform="translate(-49.873 -3.6)"
                fill="currentColor"
              ></path>
              <path
                d="M80.245,3.6a5.059,5.059,0,0,0-1.579,2.193c-1.052,2.544.088,4.473,1.052,6.227.175.263.263.526.439.789,2.193,3.771,3.07,6.49,1.4,10.437-.088.263-.351.789-.351.789H76.3a5.661,5.661,0,0,0,1.491-1.93c1.14-2.719-.175-5.175-1.491-7.543-1.491-2.894-3.157-5.789-1.4-9.911L75.421,3.6h4.824Z"
                transform="translate(-48.231 -3.6)"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </a>
        <p class="card-more">FULL STACK DEVELOPER</p>
        <ul class="subUl">
          <li>
            <span>{{
              $t(
                "message.workExperienceAndReferences.developmentAndMaintenanceClient",
              )
            }}</span>
            <a href="https://www.turecibo.com" target="_blank">Tu Recibo</a>
          </li>
        </ul>
      </div>
      <div class="card">
        <h2 class="card-header">2022/09 - 2023/11</h2>
        <a href="https://www.southworks.com/" target="_blank">
          <img
            src="https://assets-global.website-files.com/636abc71ca837f75bb2e17dd/647f2be49ecc66fceaae892e_Logo_Tagline_Primary.svg"
            alt="Southworks logo"
          />
        </a>
        <p class="card-more">FULL STACK DEVELOPER</p>
        <ul>
          <li>
            <span>{{
              $t(
                "message.workExperienceAndReferences.developmentAndMaintenanceClient",
              )
            }}</span>
            <a href="https://www.7-eleven.com/" target="_blank">7 Eleven</a>
          </li>
          <li>
            <span>{{
              $t(
                "message.workExperienceAndReferences.developmentAndMaintenanceClient",
              )
            }}</span>
            <a href="https://unity.com/" target="_blank">Unity</a>
          </li>
        </ul>
      </div>
      <div class="card">
        <h2 class="card-header">
          2023/11 - {{ $t("message.workExperienceAndReferences.present") }}
        </h2>
        <a href="https://www.kayakomat.com" target="_blank">
          <img
            src="https://www.kayakomat.com/logo-black.png"
            alt="Kayakomat logo"
          />
        </a>
        <p class="card-more">FULL STACK DEVELOPER</p>
        <ul>
          <li>
            <span>{{
              $t(
                "message.workExperienceAndReferences.developmentAndMaintenance",
              )
            }}</span>
            <a href="https://www.kayakomat.com/logo-black.png" target="_blank"
              >Kayakomat</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="margin-top">
      <h1 class="content-h1">
        {{ $t("message.workExperienceAndReferences.titleReferences") }}
      </h1>
      <div class="grid">
        <div class="card">
          <h2 class="card-header">Cumpa Emmanuel</h2>
          <a
            class="card-info"
            href="mailto:emmanuel.cumpa@gmail.com"
            target="_blank"
            >emmanuel.cumpa@gmail.com</a
          >
          <p class="card-more">
            {{ $t("message.workExperienceAndReferences.projectLeader") }}
            “TU RECIBO”
          </p>
        </div>
        <div class="card">
          <h2 class="card-header">Fernández Ponce Ezequiel</h2>
          <a href="mailto:info@ezfepo.com" target="_blank">info@ezfepo.com</a>
          <p class="card-more">
            {{ $t("message.workExperienceAndReferences.projectLeader") }}
            “7 ELEVEN”
          </p>
        </div>
        <div class="card">
          <h2 class="card-header">Ellinor Håkansson</h2>
          <a href="mailto:ellhak@kth.se" target="_blank">ellhak@kth.se</a>
          <p class="card-more">
            {{ $t("message.workExperienceAndReferences.cto") }}
          </p>
        </div>
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
  }

  img,
  svg {
    width: 200px;
  }

  .card-more {
    padding: 10px 0 0 0;
  }

  ul {
    padding: 20px 10px 10px 10px;
    text-align: left;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #464646;

    li {
      margin: 10px 0 0 0;

      a {
        text-decoration: underline;
      }

      a:hover {
        color: #62a77d;
      }
    }
  }
}

.margin-top {
  margin-top: 30px;
  width: 100%;
}
</style>
