"use Client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import convertTimestamp from "@/utils/convertTimestamp";
import Card from "../card/Card";
import useContainerDimensions from "@/hooks/useContainerDimensions";
import { useEffect, useRef, useState } from "react";
import { useGetOneCallQuery } from "@/services/oneCallApi.services";
import convertIcons from "@/utils/convertIcons";
import Skeleton from "../skeleton/Skeleton";
import Image from "next/image";

type Props = { className?: string };

const TodayForecast = ({ className }: Props) => {
  const [show, setShow] = useState<number>(5);
  const ref = useRef(null);
  const { width } = useContainerDimensions(ref);
  const { cityPicker } = useSelector((state: RootState) => state.geoSlice);
  const { data: oneCall, isLoading } = useGetOneCallQuery({
    lon: (cityPicker as any).center[0],

    lat: (cityPicker as any).center[1],
  });

  useEffect(() => {
    width && width <= 400 ? setShow(3) : setShow(5);

    return () => {};
  }, [width]);

  return (
    <Card className={`flex-col mb-4 ${className ? className : ""}`} ref={ref}>
      <div className="w-full flex justify-between items-center mb-6">
        <p className="w-full uppercase text-subHeadline text-secondary">
          today&apos;s forecast
        </p>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div
          className={`w-full grid ${
            width <= 400 ? "grid-cols-3" : "grid-cols-5"
          }`}
        >
          {oneCall?.hourly.map(
            (hour, index: number) =>
              index < show && (
                <div
                  key={index}
                  className={`col-span-1 flex flex-col justify-center border-solid border-primary-light ${
                    index < show - 1 ? "border-r" : "border-none"
                  }`}
                >
                  <p className="text-body font-semibold text-center text-secondary">
                    {convertTimestamp(hour.dt).time}
                  </p>
                  <Image
                    className="w-full"
                    src={
                      hour.dt < oneCall.current.sunrise &&
                      hour.dt > oneCall.current.sunset
                        ? convertIcons(hour.weather[0].id)
                        : convertIcons(hour.weather[0].id, false)
                    }
                    width={50}
                    height={50}
                    alt="weather icon"
                  />
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#dde0e4ff" }}>
                      {Math.round(hour.temp)}°
                    </span>
                  </p>
                </div>
              )
          )}
        </div>
      )}
    </Card>
  );
};

export default TodayForecast;
