<template>
	<div v-for="user in sourceUserList">{{ user.first_name }}</div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const sourceUserList = computed(() => store.state.user.sourceUserList)
const setSourceUserList = (payload) => store.commit('user/setSourceUserList', payload)
const fetchUsers = (payload) => store.dispatch('user/fetchUsers', payload)

onBeforeMount(async () => {
	const users = await fetchUsers(['mixapen', 1, 2])
	setSourceUserList(users)
})
</script>

<style scoped></style>
