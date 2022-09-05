<template>
    <div @click='displayLanguages = !displayLanguages' class='container'>
        <i class="anchor fa-regular fa-globe"></i>
        <ul>
            <li>{{ $t('message.changeLanguage.languages.english') }}</li>
            <br>
            <li>{{ $t('message.changeLanguage.languages.spanish') }}</li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Language',
    setup() {
        const displayLanguages = ref(false);
        return { displayLanguages };
    },
};
</script>
