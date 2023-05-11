<template>
    <h1>About Details page</h1><b><hr></b>
    <p>Berisi Tentang {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>