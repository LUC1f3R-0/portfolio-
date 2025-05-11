import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://782d-212-104-228-123.ngrok-free.app/',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})
//updated
export default axiosInstance