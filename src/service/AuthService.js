import instance from './AxiosCustomize'


function authLogin(email, password) {
    return instance.post(`api/login`, { email, password })
}

function authRegister(email, password) {
    return instance.post('api/register', { email, password })
}


export { authLogin, authRegister } 