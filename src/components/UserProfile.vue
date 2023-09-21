<script setup>
import useUserState from '@/store/useUserState'

const { getFullName, updateIsLoggedIn } = useUserState()
const fullName = getFullName()
</script>

<template>
    <div class="row">
        <h3>User: {{ fullName }}</h3>
        <button
            type="submit"
            class="btnLogout"
            @click="updateIsLoggedIn(false)"
        >
            Logout
        </button>
    </div>
</template>

<style scoped>
.btnLogout {
    margin: 15px 0;
    width: fit-content;
    padding: 8px;
    cursor: pointer;
}
.row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}
</style>
