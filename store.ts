import weatherSlice from "./features/weather.slice";
import geoSlice from "@/features/geo.slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { oneCallApi } from "./services/oneCallApi.services";
import { IPAddressApi } from "./services/IPAddressApi.services";
import { locationIPApi } from "./services/locationIPApi.services";
import { weatherApi } from "./services/weatherApi.services";

const store = configureStore({
  reducer: {
    geoSlice,
    weatherSlice,
    [oneCallApi.reducerPath]: oneCallApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [IPAddressApi.reducerPath]: IPAddressApi.reducer,
    [locationIPApi.reducerPath]: locationIPApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      oneCallApi.middleware,
      weatherApi.middleware,
      IPAddressApi.middleware,
      locationIPApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
