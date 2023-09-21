import { reactive } from 'vue'

const defaultState = {
    userData: {
        firstName: '',
        lastName: '',
    },
}

const state = reactive(defaultState)

const getters = {}
const actions = {}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
