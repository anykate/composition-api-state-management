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

    getLastMovieTitle: () => {
        return computed(() => state.movies[state.movies?.length - 1])
    },
}

const actions = {
    addMovie: async (newMovie) => {
        state.movies.push(await newMovie)
    },

    removeMovie: async (movieId) => {
        state.movies = await Promise.all(
            state.movies.filter((movie) => movie.id !== parseInt(movieId))
        )
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
