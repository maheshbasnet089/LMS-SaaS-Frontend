import axios  from "axios";

const api = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
})

const authenticatedApi = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers : {
        "Authorization" : localStorage.getItem('jwtToken'),
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
})



export {api, authenticatedApi}
