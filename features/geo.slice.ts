import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Feature } from "geojson";

type State = {
  cityPicker: any;
  cityList: Feature[];
};

const initialState: State = {
  cityPicker: { center: [40.416775, -3.70379], place_name_en: "Madrid" },
  cityList: [],
};

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    pickCity: (
      state,
      action: PayloadAction<
        Feature | { center: [number, number]; place_name_en: string }
      >
    ) => {
      state.cityPicker = action.payload;
    },
    setCityListed: (state, action: PayloadAction<Feature[]>) => {
      console.log("action.payload", action.payload);
      state.cityList = action.payload;
    },
  },
});
export const { pickCity, setCityListed } = geoSlice.actions;
export default geoSlice.reducer;
