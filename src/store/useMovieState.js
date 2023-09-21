import { computed, reactive, readonly } from 'vue'

const defaultState = {
    movies: [
        {
            id: 1,
            title: 'Movie 1',
        },
        {
            id: 2,
            title: 'Movie 2',
        },
        {
            id: 3,
            title: 'Movie 3',
        },
    ],
}

const state = reactive(defaultState)

const getters = {
    getNumberOfMovies: () => {
        return computed(() => state.movies?.length)
    },
}

const actions = {}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
