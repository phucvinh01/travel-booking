import instance from './AxiosCustomize'


function authLogin(email, password) {
    return instance.post(`api/login`, { email, password })
}


export { authLogin } 