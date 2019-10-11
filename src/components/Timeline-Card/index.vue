<template>
    <div class="timeline-item">
        <div class="item-date">
            <span class="date-day">{{ data.date.day }}.</span>
            <span class="date-month">{{ data.date.month }}</span>
            <span class="date-bar-spacing"></span>
        </div>
        <div class="item-info-container">
            <p class="info-text">
                <span class="text-hour">{{ data.date.hour }} :</span>
                {{ data.text[lang] }}
            </p>
            <a
                :href="data.link"
                class="info-link"
                target="_blank"
            >{{ lang == 'fr' ? 'En savoir +' : 'See more' }}</a>
            <img
                class="info-thumbnail"
                :src="require('../../assets/' + data.image.src)"
                :alt="data.image.alt"
                v-if="data.image"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelineCard',
    props: ['data', 'lang'],
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
