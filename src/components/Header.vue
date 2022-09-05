<template>
    <header class='container'>
        <ul>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#profile'>Profile</a></li>
            <li><Language/></li>
            <li><a href='#references'>References</a></li>
            <li><a href='#technicalSkills'>TechnicalSkills </a></li>
            <li><a href='#workExperience'>Work Experience</a></li>
        </ul>
    </header>
</template>

<script>
import Language from './Language.vue';

export default{
    name: 'Header',
    components: { Language },
};
</script>

<style scoped lang='scss'>
.container {
    background-color: #fff;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    position: fixed;
    width: 100vw;
    z-index: 100;
    ul {
        display: flex;
        justify-content: space-around;
        li {
            display: inline-block;
        }
    }
}
</style>
