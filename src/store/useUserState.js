import { computed, reactive, readonly } from 'vue'

const defaultState = {
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    isLoggedIn: false,
    loading: false,
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

    getIsLoading: () => {
        return computed(() => state.loading)
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

    updateLoading: async (loadingStatus) => {
        state.loading = await loadingStatus
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
