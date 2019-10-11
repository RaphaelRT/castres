<template>
    <h2 class="bloc-title">
        <span class="title-main">{{ mainTitle }}</span>
        <span class="title-light">{{ lightTitle }}</span>
    </h2>
</template>

<script>
export default {
    name: 'TitleBloc',
    props: ['mainTitle', 'lightTitle'],
}
</script>

<style scoped lang="scss">
@import 'style.scss';
</style>