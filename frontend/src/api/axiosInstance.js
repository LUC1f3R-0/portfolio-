import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance
