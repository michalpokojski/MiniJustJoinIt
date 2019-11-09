import axios from 'axios'

const APIInterceptor = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default APIInterceptor
