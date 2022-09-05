<template>
  <div>
    <Header/>
    <div class='app'>
        <div id='picture' class='box'>
          <Picture/>
        </div>
        <div id='name' class='box gray'>
          <Name/>
        </div>
        <div id='profile' class='box'>
          <Profile/>
        </div>
        <div id='technicalSkills' class='box gray'>
          <TechnicalSkills/>
        </div>
        <div id='contact' class='box'>
          <Contact/>
        </div>
        <div id='workExperience' class='box'>
          <WorkExperience/>
        </div>
        <div id='references' class='box'>
          <References/>
        </div>
        <div id='education' class='box gray'>
          <Education/>
        </div>
    </div>
  </div>
</template>

<script>
import Contact from './components/Contact.vue';
import Education from './components/Education.vue';
import Header from './components/Header.vue';
import Name from './components/Name.vue';
import Picture from './components/Picture.vue';
import Profile from './components/Profile.vue';
import References from './components/References.vue';
import TechnicalSkills from './components/TechnicalSkills.vue';
import WorkExperience from './components/WorkExperience.vue';

export default {
    name: 'App',
    components: {
        Contact,
        Education,
        Header,
        Name,
        Picture,
        Profile,
        References,
        TechnicalSkills,
        WorkExperience,
    },
};
</script>

<style lang='scss'>
@import './assets/main';

.box {
    border-radius: 20px;
    margin: 5px;
    padding: 15px;
}
.gray {
    background-color: #ececec;
}
@media (min-width: 650px) {
.app {
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 25px;
        .workExperience {
            background-color: #ececec;
        }
    }
}
@media (max-width: 650px) {
    .app {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
        text-align: center;
        .box {
            width: 100%;
        }
        #picture {
            order: 0;
        }
        #name {
            order: 1;
        }
        #profile {
            order: 2;
        }
        #technicalSkills {
            order: 3;
        }
        #workExperience {
            background-color: #fff;
            order: 4;
        }
        #education {
            order: 5;
        }
        #references {
            order: 6;
        }
        #contact {
            background-color: #ececec;
            order: 7;
        }
    }
}
</style>
