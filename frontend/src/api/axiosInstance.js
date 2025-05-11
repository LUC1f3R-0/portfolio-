import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://3f0e-212-104-228-123.ngrok-free.app',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance