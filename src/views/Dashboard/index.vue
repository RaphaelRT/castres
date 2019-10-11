<template>
    <div class="dashboard">
        <title-block
            :main-title="translate(data.firstTitle.mainTitle)"
            :light-title="translate(data.firstTitle.lightTitle)"
        />
        <Map />
        <title-block
            class="tips"
            :main-title="translate(data.secondTitle.mainTitle)"
            :light-title="translate(data.secondTitle.lightTitle)"
        />
        <div class="card-container">
            <card
                v-for="(card, i) in data.cards"
                :title="translate(card.title)"
                :img="card.img"
                :key="i"
            />
        </div>
        <title-block
            class="tips"
            :main-title="translate(data.thirdTitle.mainTitle)"
            :light-title="translate(data.thirdTitle.lightTitle)"
        />
        <p class="document-paragraph">{{ translate(data.documents.paragraph) }}</p>
        <ul class="list">
            <li
                class="list-item"
                v-for="(element, i) in data.documents.lists"
                :key="i"
            >{{ translate(element) }}</li>
        </ul>
        <a href="https://www.youtube.com/watch?v=pRpeEdMmmQ0">
            <div class="document-download">
                <p>{{ translate(data.documents.paragraph)}}</p>
                <div class="icon">
                    <img :src="require('../../assets/' + logo)" alt="document icon" />
                </div>
            </div>
        </a>
        <title-block
            class="tips"
            :main-title="translate(data.fourthTitle.mainTitle)"
            :light-title="translate(data.fourthTitle.lightTitle)"
        />
        <form class="form">
            <flat-input :placeholder="translate(data.form.firstInput)" />
            <div class="flex">
                <div class="half">
                    <flat-input :placeholder="translate(data.form.secondInput)" />
                </div>
                <div class="half">
                    <flat-input :placeholder="translate(data.form.thirdInput)" />
                </div>
            </div>
            <flat-input :placeholder="translate(data.form.fourthInput)" style="margin-top: 10px;" />
            <div class="flex" style="justify-content:flex-end;">
                <button class="submit" type="submit">{{ submitText }}</button>
            </div>
        </form>
    </div>
</template>

<script>
import data from '../../data.json'

import TitleBlock from '@/components/Title-Bloc'
import Map from '@/components/Map'
import Card from '@/components/Card'
import FlatInput from '@/components/FlatInput'

export default {
    name: 'Dashboard',
    components: {
        TitleBlock,
        Map,
        Card,
        FlatInput,
    },
    data() {
        return {
            data: data.dashboard,
            logo: data.logo.src,
        }
    },
    computed: {
        submitText() {
            const [lang, _] = this.parseRoute()
            return lang === 'fr' ? 'Envoyer' : 'Send'
        },
    },
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>