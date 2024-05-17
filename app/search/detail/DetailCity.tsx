import SomeDaysForecast from "@/components/someDaysForecast/SomeDaysForecast";
import TodayForecast from "@/components/todayForecast/TodayForecast";
import WeatherHead from "@/components/weatherHead/WeatherHead";

const DetailCity = () => {
  return (
    <>
      <WeatherHead className="bg-transparent !border-solid border-primary-light border-b !rounded-none !py-2" />

      <TodayForecast className="bg-transparent !border-solid border-primary-light border-b !rounded-none !py-2" />

      <SomeDaysForecast days={3} className="bg-transparent !py-2" />
    </>
  );
};

export default DetailCity;
