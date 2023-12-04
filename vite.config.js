import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vue-vk-test-task',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
