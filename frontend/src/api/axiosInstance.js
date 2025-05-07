import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://4765-175-157-232-6.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance
