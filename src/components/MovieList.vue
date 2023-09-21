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
    <div class="movieList">
        <ul class="movies">
            <li
                v-for="movie of movieState.movies"
                :key="movie.id"
            >
                <div class="row">
                    {{ movie.title }}
                    <button
                        type="submit"
                        class="delBtn"
                    >
                        x
                    </button>
                </div>
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
ul {
    list-style: square;
}
.movieList {
    margin-bottom: 4rem;
}
.btnSubmit {
    margin: 15px 0;
    width: fit-content;
    padding: 8px;
}
.movies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}
.row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}
.delBtn {
    padding: 2px 8px;
    cursor: pointer;
}
</style>
