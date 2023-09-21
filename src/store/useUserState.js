import { computed, reactive, readonly, watch } from 'vue'

const STATE_NAME = 'userState'

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

const getDefaultState = () => {
    if (localStorage.getItem(STATE_NAME) !== null) {
        return JSON.parse(localStorage.getItem(STATE_NAME))
    }

    return defaultState
}

const state = reactive(getDefaultState())

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

        if (isLoggedIn === false) {
            state.userData.firstName = ''
            state.userData.lastName = ''
            state.userData.email = ''
            state.userData.password = ''

            localStorage.removeItem(STATE_NAME)
        }
    },

    updateLoading: async (loadingStatus) => {
        state.loading = await loadingStatus
    },
}

watch(
    () => state,
    () => {
        localStorage.setItem(STATE_NAME, JSON.stringify(state))
    },
    { deep: true }
)

export default () => {
    if (localStorage.getItem(STATE_NAME) === null) {
        localStorage.setItem(STATE_NAME, JSON.stringify(state))
    }

    return {
        state: readonly(state),
        ...getters,
        ...actions,
    }
}
