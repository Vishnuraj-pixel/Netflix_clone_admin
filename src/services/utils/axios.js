import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
    baseURL: 'http://localhost:9026/v1/api' //DEV
})

customFetch.interceptors.request.use((config) => {
    const user = getUserFromLocalStorage()
    if (user) {
        config.headers.common['Authorization'] = `Bearer ${user.access_token}`
    }
    return config
})

export default customFetch