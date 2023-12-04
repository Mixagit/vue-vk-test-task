<template>
	<div>{{ sourceUserList }}</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const sourceUserList = computed(() => store.state.user.sourceUserList)
</script>

<style scoped></style>
