<script setup>
import MovieList from '@/components/MovieList.vue'
import useMovieState from '@/store/useMovieState'
import { computed } from 'vue'
const { state: movieState } = useMovieState()
const numberOfMovies = computed(() => {
    return movieState.movies.length
})
</script>

<template>
    <div>
        <h1>Hello World</h1>
        <movie-list />
        Number of Movies: {{ numberOfMovies }}
    </div>
</template>

<style scoped></style>
