<script setup>
import MovieList from '@/components/MovieList.vue'
import UserLogin from '@/components/UserLogin.vue'
import useMovieState from '@/store/useMovieState'
const { getNumberOfMovies } = useMovieState()
const numberOfMovies = getNumberOfMovies()
</script>

<template>
    <div class="container">
        <h1>Hello World</h1>
        <user-login />
        <movie-list />
        Number of Movies: {{ numberOfMovies }}
    </div>
</template>

<style>
.container {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
