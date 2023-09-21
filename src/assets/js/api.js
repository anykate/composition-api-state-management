export const login = async ({ firstName, lastName, email, password }) =>
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
        }, 3000)
    })
