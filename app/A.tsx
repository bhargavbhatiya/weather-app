"use client";
// import "./page.module.css";
import { pickCity, setCityListed } from "@/features/geo.slice";
import Aside from "@/components/aside/Aside";
import Card from "@/components/card/Card";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useGetIPAddressQuery } from "@/services/IPAddressApi.services";
import {
  useGetLocationCityQuery,
  useGetLocationLatLngQuery,
} from "@/services/locationIPApi.services";
import { useEffect } from "react";
import type { Feature } from "geojson";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import "@maptiler/geocoding-control/style.css";

const LayoutA = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: ip } = useGetIPAddressQuery();
  const { data: latLng } = useGetLocationLatLngQuery(ip || "118.69.244.151");
  const { data: city } = useGetLocationCityQuery(ip || "118.69.244.151");

  useEffect(() => {
    latLng &&
      city &&
      dispatch(
        pickCity({
          center: [Number(latLng.split(",")[1]), Number(latLng.split(",")[0])],
          place_name_en: city,
        })
      );

    return () => {};
  }, [city, latLng, dispatch]);

  // const [mapController, setMapController] = useState<MapController>()
  // const navigate = useNavigate()

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value)

  //   navigate('/search')
  // }

  const pickCityHandler = (event: Feature | undefined) => {
    event && dispatch(pickCity(event));
  };

  const featuresListedHandler = (event: Feature[] | undefined) => {
    event && dispatch(setCityListed(event));
  };

  // const handleMapController = useCallback((data: MapController) => {
  //   setMapController(data)
  // }, [])

  return (
    <>
      <div className="grid grid-cols-12">
        <Card className="!rounded-xl !h-[48px] col-span-12 lg:col-span-8 geo--config !overflow-visible !z-30">
          <GeocodingControl
            class="!bg-transparent !w-full !max-w-full !z-30 !text-secondary-white geo-input--config"
            placeholder="Search for cities"
            apiKey="K77QqbjAUgGoACHLoRRO"
            onPick={pickCityHandler}
            onFeaturesListed={featuresListedHandler}
            minLength={1}
            // mapController={mapController}
          />
        </Card>
      </div>
    </>
  );
};

export default LayoutA;
