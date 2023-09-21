<script setup>
import useMovieState from '@/store/useMovieState'
import useUserState from '@/store/useUserState'

const { state: movieState, addMovie, getNumberOfMovies } = useMovieState()

const { getIsLoggedIn } = useUserState()
const isUserLoggedIn = getIsLoggedIn()

const onAddMovieClick = () => {
    addMovie({
        id: getNumberOfMovies().value + 1,
        title: `Movie ${getNumberOfMovies().value + 1}`,
    })
}
</script>

<template>
    <div>
        <ul>
            <li
                v-for="movie of movieState.movies"
                :key="movie.id"
            >
                {{ movie.title }}
            </li>
        </ul>
        <button
            type="submit"
            class="btnSubmit"
            @click="onAddMovieClick"
            v-if="isUserLoggedIn"
        >
            Add Movie
        </button>
    </div>
</template>

<style scoped>
.btnSubmit {
    margin: 15px 0;
    width: fit-content;
    padding: 8px;
}
</style>
