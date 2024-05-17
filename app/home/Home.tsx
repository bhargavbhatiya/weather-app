"use client";
import SomeDaysForecast from "@/components/someDaysForecast/SomeDaysForecast";
import Weather from "./weather/Weather";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <Weather />
      </div>

      <div className="col-span-12 md:col-span-4">
        <SomeDaysForecast days={7} />
      </div>
    </div>
  );
};

export default Home;
