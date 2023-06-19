<template>
  <div class="page">
    <div class="background-container">
      <img class="background-img" src="../assets/background-img.jpg" />
      <div class="background-div" />
    </div>
    <div class="profile-card">
      <div class="card-grid">
        <img src="../assets/profile.jpg" />
        <div class="profile-content">
          <h1>
            {{ $t("message.profile.iam") }}
            <span class="h1-name">Benjamín Pla</span>
          </h1>
          <h2>Full stack developer</h2>
          <p class="lined">
            <span class="bold">{{ $t("message.profile.aboutMe") }}</span>
            {{ $t("message.profile.aboutMeText") }}
          </p>
          <p>
            <span class="bold">{{ $t("message.profile.qualities") }}</span>
            {{ $t("message.profile.qualitiesText") }}
          </p>
        </div>
        <div class="footer">
          <a href="mailto:benjaminpla.dev@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/benjaminPla" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/benjamin-pla/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background-container {
  display: grid;
  grid-template-rows: 3fr 1fr;
  height: 100%;
  width: 100%;

  .background-img {
    height: 75vh;
    object-fit: cover;
    object-position: 0% 0%;
    opacity: 0.5;
    width: 100%;
  }

  .background-div {
    min-height: 25vh;
  }
}

.profile-card {
  background-color: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -40%);
  width: 70vw;

  .card-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    letter-spacing: 0.05em;
    place-items: center;

    img {
      height: 100%;
      max-height: 600px;
      min-width: 250px;
      object-fit: cover;
      padding: 50px 0 30px 50px;
      width: 100%;
    }

    .profile-content {
      color: #1c1c1c;
      font-family: "Montserrat";
      font-weight: 300;
      padding: 50px 50px 30px 50px;

      h1 {
        font-size: 25px;
        font-weight: 300;
        line-height: 20px;

        .h1-name {
          font-weight: 900;
        }
      }

      h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 49px;
        padding: 0 0 5px 0;
      }

      p {
        padding: 20px 0 0 0;
        .bold {
          font-weight: 500;
        }
      }
      .lined {
        border-top: 2px solid #62a77d;
      }
    }

    .footer {
      background-color: #62a77d;
      display: flex;
      font-size: 20px;
      grid-column: span 2;
      justify-content: space-evenly;
      padding: 20px 200px;
      width: 100%;

      i:hover {
        animation: scaleAnimation 0.2s ease-in-out forwards;
      }
    }
  }
}
</style>
