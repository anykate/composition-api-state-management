<script setup>
import useMovieState from '@/store/useMovieState'
import useUserState from '@/store/useUserState'

const {
    state: movieState,
    addMovie,
    getLastMovieTitle,
    removeMovie,
} = useMovieState()

const { getIsLoggedIn } = useUserState()
const isUserLoggedIn = getIsLoggedIn()

const onAddMovieClick = () => {
    let lastMovieId = getLastMovieTitle().value?.title.split(' ')[1]

    if (!lastMovieId) {
        lastMovieId = '0'
    }

    addMovie({
        id: parseInt(lastMovieId) + 1,
        title: `Movie ${parseInt(lastMovieId) + 1}`,
    })
}

const removeMovieOnClick = (movieId) => {
    removeMovie(movieId)
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
                        class="btnDelete"
                        @click="removeMovieOnClick(movie.id)"
                        v-if="isUserLoggedIn"
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
    cursor: pointer;
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
.btnDelete {
    padding: 2px 8px;
    cursor: pointer;
}
</style>
