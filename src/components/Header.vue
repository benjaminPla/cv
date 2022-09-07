<template>
    <header class='container'>
        <i
            class="fa-solid fa-bars hamburger"
            @click='toggleMenu = !toggleMenu'>
        </i>
        <ul
            class='menuOptionsMobile'
            @click='toggleMenu = !toggleMenu'
            v-show='toggleMenu'
        >
            <li>
                <a href='#contact'>
                    {{ $t('message.contact.title') }}
                </a>
            </li>
            <li>
                <a href='#education'>
                    {{ $t('message.education.title') }}
                </a>
            </li>
            <li>
                <a href='#profile'>
                    {{ $t('message.profile.title') }}
                </a>
            </li>
            <li>
                <a href='#references'>
                    {{ $t('message.references.title') }}
                </a>
            </li>
            <li>
                <a href='#technicalSkills'>
                    {{ $t('message.technicalSkills.title') }}
                </a>
            </li>
            <li>
                <a href='#workExperience'>
                    {{ $t('message.workExperience.title') }}
                </a>
            </li>
            <li>
                <a @click='$i18n.locale = "en"'>
                    {{ $t('message.changeLanguage.languages.english') }}
                </a>
                     | 
                <a @click='$i18n.locale = "es"'>
                    {{ $t('message.changeLanguage.languages.spanish') }}
                </a>
            </li>
        </ul>
        <ul class='menuOptionsDesktop'>
            <li>
                <a href='#contact'>
                    {{ $t('message.contact.title') }}
                </a>
            </li>
            <li>
                <a href='#education'>
                    {{ $t('message.education.title') }}
                </a>
            </li>
            <li>
                <a href='#profile'>
                    {{ $t('message.profile.title') }}
                </a>
            </li>
            <li>
                <a href='#references'>
                    {{ $t('message.references.title') }}
                </a>
            </li>
            <li>
                <a href='#technicalSkills'>
                    {{ $t('message.technicalSkills.title') }}
                </a>
            </li>
            <li>
                <a href='#workExperience'>
                    {{ $t('message.workExperience.title') }}
                </a>
            </li>
            <li><Language/></li>
        </ul>
    </header>
</template>

<script>
import { ref } from 'vue';
import Language from './Language.vue';

export default{
    name: 'Header',
    components: { Language },
    setup() {
        const toggleMenu = ref(false);
        return { toggleMenu };
    },
};
</script>

<style scoped lang='scss'>
a {
    color: #000;
    font-weight: 600;
}
@media (max-width: 650px) {
    .container {
        padding: 10px 15px;
        position: absolute;
        text-align: right;
        width: 100vw;
        .menuOptionsMobile {
            background: #fff;
            border-radius: 10px 10px 0 0;
            bottom: 0;
            overflow: hidden;
            position: fixed;
            right: 0;
            text-align: center;
            width: 100vw;
            box-shadow: rgb(33 35 38 / 10%) 10px 10px 10px 10px;
            li {
                padding: 10px 0;
            }
            li:hover {
                background-color: #ddd;
            }
        }
        .menuOptionsDesktop {
            display: none;
        }
    }
}
@media (min-width: 650px) {
    .container {
        background-color: #fff;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        padding: 10px 0;
        position: fixed;
        width: 100vw;
        z-index: 100;
        .hamburger {
            display: none;
        }
        .menuOptionsMobile {
            display: none;
        }
        .menuOptionsDesktop {
            display: flex;
            justify-content: space-around;
            li {
                display: inline-block;
            }
        }
    }
    .menuOptions {
        display: none;
    }
}
</style>
