<script setup>
import MovieList from '@/components/MovieList.vue'
import useMovieState from '@/store/useMovieState'
const { getNumberOfMovies } = useMovieState()
const numberOfMovies = getNumberOfMovies()
</script>

<template>
    <div>
        <h1>Hello World</h1>
        <movie-list />
        Number of Movies: {{ numberOfMovies }}
    </div>
</template>

<style scoped></style>
