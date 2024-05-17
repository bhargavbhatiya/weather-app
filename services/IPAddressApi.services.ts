import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const IPAddressApi = createApi({
  reducerPath: "IPAddressApi",
  tagTypes: ["IPAddress"],
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.ipify.org/",
  }),
  endpoints: (build) => ({
    getIPAddress: build.query<string, void>({
      query() {
        return {
          url: ``,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetIPAddressQuery } = IPAddressApi;
