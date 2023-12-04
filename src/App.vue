<template>
	<RouterView />
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
	await VK.init({
		apiId: import.meta.env.VITE_APP_ID
	})
})
</script>

<style scoped></style>
