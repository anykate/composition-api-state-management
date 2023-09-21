import { computed, reactive, readonly } from 'vue'

const defaultState = {
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    isLoggedIn: false,
}

const state = reactive(defaultState)

const getters = {
    getFullName: () => {
        return computed(
            () => `${state.userData?.firstName} ${state.userData?.lastName}`
        )
    },

    getIsLoggedIn: () => {
        return computed(() => state.isLoggedIn)
    },
}

const actions = {
    updateUserData: async ({ firstName, lastName, email, password }) => {
        state.userData.firstName = await firstName
        state.userData.lastName = await lastName
        state.userData.email = await email
        state.userData.password = await password

        actions.updateIsLoggedIn(true)
    },

    updateIsLoggedIn: async (isLoggedIn) => {
        state.isLoggedIn = await isLoggedIn
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
