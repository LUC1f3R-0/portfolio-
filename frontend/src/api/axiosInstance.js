import axios from 'axios'

console.log("run")

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKENDLINK,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance