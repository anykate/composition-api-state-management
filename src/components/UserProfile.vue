<script setup>
import useUserState from '@/store/useUserState'

const { getFullName } = useUserState()
const fullName = getFullName()
</script>

<template>
    <div>
        <h3>User: {{ fullName }}</h3>
    </div>
</template>

<style scoped></style>
