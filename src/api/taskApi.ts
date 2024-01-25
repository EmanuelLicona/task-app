import axios from 'axios'
import { onLogout } from '../store/auth/authSlice'

export const taskApi = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true
})

export const axiosInterceptor = (store: any) => {
  // intercept the response
  taskApi.interceptors.response.use(
    (res) => res,
    async (err) => {
      const status = err?.response?.status || null;
      // if unauthorized redirect to login page
      if (status === 401) {
        await store.dispatch(onLogout(''));
      }
      return Promise.reject(err);
    }
  );
};


