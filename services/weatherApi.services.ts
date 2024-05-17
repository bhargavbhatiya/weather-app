import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { IWeatherCurrent } from "@/interfaces/weather.interfaces";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  tagTypes: ["Weather"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    getWeather: build.query<IWeatherCurrent, { lat: number; lon: number }>({
      query(payload) {
        return {
          url: `weather?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=266205880d8bae46de1cdd7cc5b4d7ff`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
