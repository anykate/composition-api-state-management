import { reactive, readonly } from 'vue'

const defaultState = {
    userData: {
        email: '',
        password: '',
    },
}

const state = reactive(defaultState)

const getters = {}

const actions = {
    updateUserData: async ({ email, password }) => {
        state.userData.email = await email
        state.userData.password = await password
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
