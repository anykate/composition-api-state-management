<script setup>
import { login } from '@/assets/js/api'
import useUserState from '@/store/useUserState'
import { reactive } from 'vue'

const { updateUserData } = useUserState()

const userForm = reactive({
    email: '',
    password: '',
})

const onSubmitForm = () => {
    login(userForm).then((data) => updateUserData(data))

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
                <label for="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="userForm.email"
                    placeholder="Enter your Email here..."
                />
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="userForm.password"
                    placeholder="Enter your Password here..."
                />
            </div>
            <button
                type="submit"
                class="btnSubmit"
            >
                Submit
            </button>
        </form>
    </div>
</template>
<style scoped>
#myForm {
    display: inline-block;
}
input[type='email'],
input[type='password'] {
    width: 20rem;
    margin: 4px 0;
}
.form-group input[type='email'] {
    margin-left: 31px;
}
.btnSubmit {
    margin: 15px 0;
}
</style>
