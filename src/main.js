import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VALID_LANGS } from './constants'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.mixin({
    methods: {
        parseRoute() {
            const splittedPath = this.$route.path.substr(1).split('/')
            const lang = splittedPath[0]
            const routes = splittedPath.splice(1)
            const route = routes.join('/')

            if (!VALID_LANGS.includes(lang)) this.$router.push(`/fr/${route}`)

            return [lang, route]
        },
        translate(sentence) {
            const [lang, _] = this.parseRoute()
            return sentence[lang]
        },
    },
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
