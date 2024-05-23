import {
  PrecipitationLayer,
  PressureLayer,
  RadarLayer,
  TemperatureLayer,
  WindLayer,
} from "@maptiler/weather";
import Card from "@/components/card/Card";
import WeatherHead from "@/components/weatherHead/WeatherHead";

type Props = {
  weatherLayers: {
    [key: string]: {
      layer:
        | PrecipitationLayer
        | PressureLayer
        | RadarLayer
        | TemperatureLayer
        | WindLayer;
      value: string;
      units: string;
    };
  };
  layerLabel: string;
  changeWeatherLayer: (type: string) => void;
};

const WeatherMapAside = ({
  weatherLayers,
  layerLabel,
  changeWeatherLayer,
}: Props) => {
  return (
    <div className="col-span-12 md:col-span-4 md:order-2 flex flex-col md:flex-col-reverse">
      <WeatherHead />
      <Card className="">
        <div className="w-full flex flex-wrap items-center md:flex-col gap-2">
          {Object.keys(weatherLayers).map((type, index) => (
            <button
              key={index}
              id={type}
              className={`md:w-full bg-accent-blue text-body text-secondary-white capitalize md:uppercase rounded-lg p-2 ${
                layerLabel === type && "opacity-70"
              }`}
              onClick={() => {
                changeWeatherLayer(type);
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WeatherMapAside;
