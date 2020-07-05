function getEnv() {
    const {NODE_ENV, MODE} = process.env
    let {isProd, isDev} = false
    switch (NODE_ENV) {
        case 'production':
            isProd = true
            break
        case 'development':
            isDev = true
    }
    return {isDev, isProd}
}


module.exports = {
    getEnv,
}
