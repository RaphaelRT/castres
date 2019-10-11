<template>
    <footer class="footer-container">
        <div class="logo-container">
            <img class="logo" :src="require('../../assets/' + data.logo.src)" :alt="data.logo.alt" />
        </div>
        <div class="contact-list">
            <a
                :href="contact.link"
                class="contact-item"
                v-for="contact in data.contacts"
                :key="contact.id"
                target="_blank"
            >
                <img :src="contact.image.src" :alt="contact.image.alt" class="item-image" />
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ['data'],
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
