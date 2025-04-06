import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

export const axiosClient: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_API_URL,
  paramsSerializer: (params) => {
    return encodeURI(qs.stringify(params, { arrayFormat: 'repeat' }))
  }
})
