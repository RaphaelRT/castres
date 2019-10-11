<template>
    <div class="alert">
        <div class="icon">
            <img src="../../assets/alert.svg" alt="alert icon" />
        </div>
        <div class="text">
            <p>{{ lang === 'fr' ? "Alerte ! L'ouragan Shakira touche la France consultez le site du gouvernement pour avoir toutes les informations en temps réel" : "Alert! Hurricane Shakira is affecting France, check the government website for all the information in real time"}}</p>
            <a href="http://info-shakira-gouv.netlify.com">Gouv.fr</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    data() {
        return {
            lang: 'fr',
        }
    },
    mounted() {
        const [lang, _] = this.parseRoute()
        this.lang = lang
    },
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>