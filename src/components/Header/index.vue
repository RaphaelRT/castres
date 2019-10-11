<template>
    <header class="header-container">
        <div class="logo-container">
            <img class="logo" :src="require('../../assets/' + data.logo.src)" :alt="data.logo.alt" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'Topbar',
    props: ['data'],
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
