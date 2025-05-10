import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://5ed0-175-157-239-65.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance