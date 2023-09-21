<script setup>
import MovieList from '@/components/MovieList.vue'
import UserLogin from '@/components/UserLogin.vue'
import UserProfile from '@/components/UserProfile.vue'

import useMovieState from '@/store/useMovieState'
import useUserState from '@/store/useUserState'

const { getNumberOfMovies } = useMovieState()
const numberOfMovies = getNumberOfMovies()

const { getIsLoggedIn } = useUserState()
const isLoggedIn = getIsLoggedIn()
</script>

<template>
    <div class="container">
        <h1>
            State Management using Vue3 Composition API (without VueX / Pinia)
        </h1>
        <user-login v-if="!isLoggedIn" />
        <user-profile v-else />
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
