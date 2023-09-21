<script setup>
import useMovieState from '@/store/useMovieState'
const { state: movieState } = useMovieState()
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
    </div>
</template>

<style lang=""></style>
