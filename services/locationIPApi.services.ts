import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axiosBaseQuery'

export const locationIPApi = createApi({
  reducerPath: 'locationIPApi',
  tagTypes: ['LocationIP'],
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://ipapi.co/'
  }),
  endpoints: (build) => ({
    getLocationLatLng: build.query<string, string>({
      query(ip) {
        return {
          url: `${ip}/latlong`,
          method: 'GET'
        }
      }
    }),
    getLocationCity: build.query<string, string>({
      query(ip) {
        return {
          url: `${ip}/city`,
          method: 'GET'
        }
      }
    })
  })
})

export const { useGetLocationLatLngQuery, useGetLocationCityQuery } = locationIPApi
