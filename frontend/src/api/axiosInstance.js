import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://205b-212-104-231-7.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance