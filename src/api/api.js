import axios from 'axios'

const defaultOptions = {
    withCredentials: true,
    baseURL: 'https://localhost:7034/',
    headers: {
        'Content-Type': 'application/json',
    }
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
    let token = JSON.parse(localStorage.getItem('library-token'));
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


export  const authAPI = {
    login(username, password) {
        return instance.post(`auth/login`, {username, password})
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    register(username, password) {
        return instance.post(`auth/register`, {username, password})
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    getRoles() {
        return instance.get(`role/user/list`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    }
}

export const bookAPI= {
    getBooks(currentPage, searchString){
        return instance.get(`book/getBooks?pageSize=${10}&currentPage=${currentPage}&searchString=${searchString}`)
            .then(response =>{
                return response;
            })
            .catch(error=>{
                return error.response;
            })
    }
}