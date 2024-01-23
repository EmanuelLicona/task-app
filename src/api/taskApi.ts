import axios from 'axios'
// import { getEnvVariables } from '../helpers'

// const { VITE_API_URL } = getEnvVariables()

export const taskApi = axios.create({
  baseURL: 'https://apimocha.com/task-app'
})

// const calendarApi = axios.create({
//   baseURL: VITE_API_URL
// })

// Todo: configurar interceptores
// calendarApi.interceptors.request.use(config => {

//   config.headers = {
//     ...config.headers,
//     'x-token': localStorage.getItem('token')
//   }

//   return config
// })




