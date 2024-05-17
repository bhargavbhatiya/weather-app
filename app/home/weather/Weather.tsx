"use client";
import { useState } from "react";
import TodayForecast from "@/components/todayForecast/TodayForecast";
import WeatherHead from "@/components/weatherHead/WeatherHead";
import AirConditions from "../airConditions/AirConditions";
import AirConditionsExtend from "../airConditions/AirConditionsExtend";

const Weather = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <>
      <WeatherHead />
      {seeMore ? (
        <AirConditionsExtend />
      ) : (
        <>
          <TodayForecast />
          <AirConditions onSeeMore={() => setSeeMore(true)} />
        </>
      )}
    </>
  );
};

export default Weather;
