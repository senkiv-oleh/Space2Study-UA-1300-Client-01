import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_URL,
    credentials: 'include'
  }),
  reducerPath: 'appApi',
  endpoints: () => ({})
})
