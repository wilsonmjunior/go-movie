import axios from 'axios';

export const endpoint = (url: string) => `${url}/?api_key=cbe6d53a0a92500a66d1cf0ce26c570d` 

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

export default api
