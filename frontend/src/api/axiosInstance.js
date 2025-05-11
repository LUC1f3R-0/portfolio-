import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://fa78-212-104-228-123.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance