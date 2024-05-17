"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import convertTimestamp from "@/utils/convertTimestamp";
import Card from "@/components/card/Card";
import { useGetOneCallQuery } from "@/services/oneCallApi.services";
import Skeleton from "@/components/skeleton/Skeleton";

const AirConditionsExtend = () => {
  const { cityPicker } = useSelector((state: RootState) => state.geoSlice);

  const { data: oneCall, isLoading } = useGetOneCallQuery({
    lon: (cityPicker as any).center[0],

    lat: (cityPicker as any).center[1],
  });

  const airConditions: {
    icon: IconName;
    name: string;
    value: number | string | undefined;
    unit: string;
  }[] = [
    {
      icon: "sun",
      name: "UV index",
      value: oneCall?.current.uvi,
      unit: "",
    },
    {
      icon: "wind",
      name: "wind",
      value: oneCall?.current.wind_speed,
      unit: " km/h",
    },
    {
      icon: "shower",
      name: "humidity",
      value: oneCall?.current.humidity,
      unit: "%",
    },
    {
      icon: "eye",
      name: "visibility",
      value: oneCall?.current.visibility && oneCall?.current.visibility / 1000,
      unit: " km",
    },
    {
      icon: "thermometer-half",
      name: "feels like",
      value: oneCall?.current.feels_like,
      unit: "°",
    },
    {
      icon: "tint",
      name: "chance of rain",
      value: oneCall?.current.rain ? oneCall.current.rain["1h"] : 0,
      unit: " mm/h",
    },
    {
      icon: "tachometer",
      name: "pressure",
      value: oneCall?.current.pressure,
      unit: " hPa",
    },
    {
      icon: "cloud-sun",
      name: "sunset",
      value: oneCall?.current.sunset
        ? convertTimestamp(oneCall?.current.sunset).time
        : 0,
      unit: "",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
      {airConditions.map((air, index) => (
        <Card key={index} className="!justify-start !items-start gap-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              <FontAwesomeIcon
                className="w-6 h-6 text-secondary"
                icon={["fas", air.icon]}
              />
              <div>
                <p className="text-label text-secondary mb-2 uppercase">
                  {air.name}
                </p>
                <p className="text-value text-secondary-light">
                  {air.value ? air.value : 0}
                  {air.unit}
                </p>
              </div>
            </>
          )}
        </Card>
      ))}
    </div>
  );
};

export default AirConditionsExtend;
