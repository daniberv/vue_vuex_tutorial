export default {
    loginUser() {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve('12345')
            }, 1500)

            let i = 0

            if(i != 0) {
                reject()
            }
        })
    }
}