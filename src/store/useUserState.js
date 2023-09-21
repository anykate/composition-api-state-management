import { reactive, readonly } from 'vue'

const defaultState = {
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
}

const state = reactive(defaultState)

const getters = {}

const actions = {
    updateUserData: async ({ firstName, lastName, email, password }) => {
        state.userData.firstName = await firstName
        state.userData.lastName = await lastName
        state.userData.email = await email
        state.userData.password = await password
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
