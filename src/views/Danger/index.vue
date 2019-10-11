<template>
    <div class="danger-page-container">
        <div class="danger-container">
            <title-bloc
                :mainTitle="translate(data.firstTitle.mainTitle)"
                :lightTitle="translate(data.firstTitle.lightTitle)"
            />
            <div class="card-container">
                <card
                    v-for="(card, i) in data.cards"
                    :title="translate(card.title)"
                    :img="card.img"
                    :key="i"
                />
            </div>
        </div>
        <div class="service-container" v-if="townName === 'Tarascon'">
            <title-bloc
                :mainTitle="lang == 'fr' ? 'Service d\'alerte' : 'Alert service'"
                :lightTitle="lang == 'fr' ? 'téléphonique' : 'hotline'"
            />
            <div class="service-text">
                <p class="text">{{ data.service.text[lang] }}</p>
                <input type="button" :value="data.service.button" class="button" />
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data.json'

import Card from '@/components/Card'
import TimelineCard from '@/components/Timeline-Card'
import TitleBloc from '@/components/Title-Bloc'

export default {
    name: 'Danger',
    components: {
        'timeline-card': TimelineCard,
        'title-bloc': TitleBloc,
        Card,
    },
    data() {
        return { data: data.danger, townName: data.name }
    },
    created() {
        const [lang, route] = this.parseRoute()
        this.lang = lang
        this.route = route
    },
    mounted() {
        console.log(this.data)
    },
}
</script>

<style scoped lang="scss">
@import 'style.scss';
</style>