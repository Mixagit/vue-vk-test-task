import { createRouter, createWebHistory } from 'vue-router'
import SourceList from '@/pages/SourceList.vue'
import FriendsList from '@/pages/FriendsList.vue'
import UserProfile from '@/pages/UserProfile.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'SourceList',
			component: SourceList
		},
		{
			path: '/friends',
			name: 'FriendsList',
			component: FriendsList
		},
		{
			path: '/user/:id',
			name: 'UserProfile',
			component: UserProfile
		}
	]
})

export default router
