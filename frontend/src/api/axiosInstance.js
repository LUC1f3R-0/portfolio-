import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://8d87-2402-4000-1333-4455-d3a-817-1e62-a54b.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance
