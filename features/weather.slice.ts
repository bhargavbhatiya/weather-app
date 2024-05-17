import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeatherOneCall } from "@/interfaces/weather.interfaces";

type State = {
  oneCall: IWeatherOneCall | null;
};

const initialState: State = {
  oneCall: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setOneCall: (state, action: PayloadAction<IWeatherOneCall>) => {
      state.oneCall = action.payload;
    },
  },
});
export const { setOneCall } = weatherSlice.actions;
export default weatherSlice.reducer;
