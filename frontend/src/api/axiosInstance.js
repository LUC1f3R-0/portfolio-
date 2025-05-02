import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://my-portfolio-mauve-six-81.vercel.app/",
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance
