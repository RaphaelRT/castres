<template>
    <div class="home">
        <div class="container">
            <Card :img="require('../assets/logo.png')" title="Ma super card 1" />
            <Card :img="require('../assets/logo.png')" title="Ma super card 2" />
            <Card :img="require('../assets/logo.png')" title="Ma super card 4" />
            <Card :img="require('../assets/logo.png')" title="Ma super card 5" />
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'
export default {
    name: 'home',
    components: {
        Card,
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>