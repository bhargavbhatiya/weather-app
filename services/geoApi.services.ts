import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { IGeo } from "@/interfaces/geo.interfaces";

export const geoApi = createApi({
  reducerPath: "geoApi",
  tagTypes: ["Geo"],
  baseQuery: axiosBaseQuery({
    baseUrl: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
    prepareHeaders: {
      "X-RapidAPI-Key": "f4424c1344msh980aa732f62e984p14b5bbjsn0a1dba33a236",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  }),
  endpoints: (build) => ({
    getCities: build.query<IGeo, string>({
      query(search) {
        return {
          url: `places?namePrefix=${search}&namePrefixDefaultLangResults=true`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCitiesQuery } = geoApi;
