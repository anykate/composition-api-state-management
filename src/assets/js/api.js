export const login = async ({ email, password }) =>
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                email: email,
                password: password,
            })
        }, 3000)
    })
