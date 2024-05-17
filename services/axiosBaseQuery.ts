import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export const axiosBaseQuery =
  ({
    baseUrl,
    prepareHeaders
  }: {
    baseUrl: string
    prepareHeaders?: { [key: string]: string }
  }): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      headers?: AxiosRequestConfig['headers']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        headers: { ...prepareHeaders },
        data,
        params
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }
