<template>
    <div class="card">
        <img :src="require('../../assets/' + img)" alt="icon" />
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['img', 'title'],
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>