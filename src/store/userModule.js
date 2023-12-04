export const userModule = {
	state: () => ({
		sourceUserList: []
	}),
	getters: {},
	mutations: {
		setSourceUserList(state, users) {
			state.sourceUserList = users
		}
	},
	actions: {
		async fetchUsers({}, userIds) {
			return new Promise((resolve, reject) => {
				VK.Api.call(
					'users.get',
					{
						user_ids: userIds,
						v: import.meta.env.VITE_VERSION,
						language: 'ru',
						fields: 'sex, bdate, photo_100'
					},
					(r) => {
						if (r && r.response) {
							resolve(r.response)
						} else {
							reject(new Error('Failed to fetch users.'))
						}
					}
				)
			})
		}
	},
	namespaced: true
}
