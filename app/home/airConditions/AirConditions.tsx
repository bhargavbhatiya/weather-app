"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@/components/card/Card";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useGetOneCallQuery } from "@/services/oneCallApi.services";
import Skeleton from "@/components/skeleton/Skeleton";

type Props = {
  onSeeMore: () => void;
};
const AirConditions = ({ onSeeMore }: Props) => {
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
      icon: "thermometer-half",
      name: "read feel",
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
      icon: "wind",
      name: "wind",
      value: oneCall?.current.wind_speed,
      unit: " km/h",
    },
    {
      icon: "sun",
      name: "UV index",
      value: oneCall?.current.uvi,
      unit: "",
    },
  ];

  return (
    <Card className="flex-col">
      <div className="w-full flex justify-between items-center mb-6">
        <p className="uppercase text-subHeadline text-secondary">
          Air conditions
        </p>

        <button
          className="flex items-center justify-center outline-none rounded-3xl bg-accent-blue border-none py-1 px-4"
          onClick={onSeeMore}
        >
          <span
            className="text-subHeadline font-medium"
            style={{
              color: "rgb(245, 245, 245)",
            }}
          >
            See more
          </span>
        </button>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {airConditions.map((air, index) => (
            <div key={index} className="flex gap-3">
              <FontAwesomeIcon
                className="w-6 h-6 text-secondary"
                icon={["fas", air.icon]}
              />
              <div>
                <p className="text-label text-secondary mb-2 capitalize">
                  {air.name}
                </p>
                <p className="text-value text-secondary-light">
                  {air.value}
                  {air.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default AirConditions;
