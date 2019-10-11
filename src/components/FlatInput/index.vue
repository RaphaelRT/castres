<template>
    <input class="input" type="text" :placeholder="placeholder" />
</template>

<script>
export default {
    name: 'FlatInput',
    props: ['placeholder'],
}
</script>

<style lang="scss" scoped src="./style.scss"></style>