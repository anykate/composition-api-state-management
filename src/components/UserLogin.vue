<script setup>
import { login } from '@/assets/js/api'
import useUserState from '@/store/useUserState'
import { reactive } from 'vue'

const { updateUserData, updateLoading, getIsLoading } = useUserState()

const loadingState = getIsLoading()

const userForm = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
})

const onSubmitForm = () => {
    updateLoading(true)

    login(userForm)
        .then((data) => updateUserData(data))
        .finally(() => updateLoading(false))

    userForm.firstName = ''
    userForm.lastName = ''
    userForm.email = ''
    userForm.password = ''
}
</script>

<template>
    <div>
        <form
            @submit.prevent="onSubmitForm"
            id="myForm"
        >
            <div class="form-group">
                <label for="fname">First Name: </label>
                <input
                    type="text"
                    name="first_name"
                    autocomplete="off"
                    id="fname"
                    v-model="userForm.firstName"
                    placeholder="Enter your First Name here..."
                    required
                />
            </div>
            <div class="form-group">
                <label for="lname">Last Name: </label>
                <input
                    type="text"
                    name="last_name"
                    autocomplete="off"
                    id="lname"
                    v-model="userForm.lastName"
                    placeholder="Enter your Last Name here..."
                    required
                />
            </div>
            <div class="form-group">
                <label for="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    autocomplete="off"
                    id="email"
                    v-model="userForm.email"
                    placeholder="Enter your Email here..."
                    required
                />
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    autocomplete="off"
                    id="password"
                    v-model="userForm.password"
                    placeholder="Enter your Password here..."
                    required
                />
            </div>
            <button
                type="submit"
                class="btnSubmit"
                :disabled="loadingState"
            >
                {{ loadingState ? 'Loading...' : 'Submit' }}
            </button>
        </form>
    </div>
</template>

<style scoped>
#myForm {
    display: flex;
    max-width: 30rem;
    align-items: space-between;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
input {
    width: 20rem;
}
.form-group {
    display: flex;
    justify-content: space-between;
}
.btnSubmit {
    margin: 15px 0;
    width: fit-content;
    padding: 8px;
    cursor: pointer;
}
</style>
