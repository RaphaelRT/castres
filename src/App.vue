<template>
    <div id="app">
        <Topbar :data="data" />
        <div class="container">
            <alert-modal />
            <component :is="getComponent" />
        </div>
        <Footer :data="data.footer" />
        <Navbar :route="route" :lang="lang" />
    </div>
</template>

<script>
import data from './data.json'

import Danger from './views/Danger'
import Home from './views/Home'
import Alert from './views/Alert'
import Error404 from './views/404'
import Dashboard from './views/Dashboard/index'

import Navbar from './components/Nav-Bar'
import Topbar from './components/Header'
import Footer from './components/Footer'
import AlertModal from './components/Alert'

export default {
    name: 'App',
    components: {
        Home,
        Dashboard,
        Alert,
        Topbar,
        Error404,
        Danger,
        Navbar,
        Footer,
        AlertModal,
    },
    data() {
        return { lang: 'fr', route: '/' }
    },
    created() {
        const [lang, route] = this.parseRoute()
        this.lang = lang
        this.route = route
        this.data = data
    },
    mounted() {
        document.documentElement.style.setProperty(
            '--basic-color',
            data.colors.basicColor,
        )
        document.documentElement.style.setProperty(
            '--light-color',
            data.colors.lightColor,
        )
        document.documentElement.style.setProperty(
            '--accent-color',
            data.colors.accentColor,
        )

        alert(
            "Site réalisé dans le cadre d'une semaine intensive à HETIC, tous les contenus et l'existence même de ce site ne participe qu'à une fiction. Toutes ressemblances avec une situation réelle ne serait que fortuite.",
        )
    },
    computed: {
        getComponent() {
            let component = 'Home'
            switch (this.route) {
                case '':
                    this.$router.push('/fr/danger')
                    break
                case 'dashboard':
                    component = 'Dashboard'
                    break

                case 'alert':
                    component = 'Alert'
                    break

                case 'danger':
                    component = 'Danger'
                    break

                default:
                    component = 'Error404'
                    break
            }

            return component
        },
    },
    watch: {
        $route() {
            const [lang, route] = this.parseRoute()
            this.lang = lang
            this.route = route
        },
    },
}
</script>
<style lang="scss">
@import '@/components/App/Reset.scss';
@import '@/components/App/App.scss';
</style>
