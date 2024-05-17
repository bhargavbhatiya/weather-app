"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useGetWeatherQuery } from "@/services/weatherApi.services";
import { pickCity } from "@/features/geo.slice";
import convertTimestamp from "@/utils/convertTimestamp";
import Card from "@/components/card/Card";
import Skeleton from "@/components/skeleton/Skeleton";
import type { Feature } from "geojson";
import Image from "next/image";

type Props = { item: Feature };

const SearchItem = ({ item }: Props) => {
  const { data, isLoading } = useGetWeatherQuery({
    lon: (item as any).center[0],

    lat: (item as any).center[1],
  });
  const { cityPicker } = useSelector((state: RootState) => state.geoSlice);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    data && dispatch(pickCity(item));
  };
  return isLoading ? (
    <Card>
      <Skeleton />
    </Card>
  ) : (
    <Card
      className={`cursor-pointer ${
        data && cityPicker.id === item.id
          ? "!bg-transparent !border-solid border border-accent-blue"
          : ""
      }`}
      onClick={handleClick}
    >
      <div className="w-full flex gap-2 items-center justify-between !py-0">
        <div className="flex items-center">
          <Image
            className="w-16 h-16 sm:w-20 sm:h-20"
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            width={80}
            height={80}
            alt="weather icon"
          />
          <div>
            <p className="text-secondary-light text-value mb-1">
              {(item as any).place_name_en.split(",")[0]}
            </p>
            <p className="text-secondary-light text-body mb-1">
              {(item as any).place_name_en.split(",").slice(1).join(",")}
            </p>
            <p className="text-secondary text-label">
              {data && convertTimestamp(data.dt).time}
            </p>
          </div>
        </div>

        <p className="hidden sm:block text-[#dde0e4ff] text-[40px]">
          {data && Math.round(data.main.temp)}°
        </p>
      </div>
    </Card>
  );
};

export default SearchItem;
