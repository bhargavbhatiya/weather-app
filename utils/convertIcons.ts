import {
  Climacon_cloud_drizzle_moon,
  Climacon_cloud_drizzle_sun,
  Climacon_cloud_fog_alt_moon,
  Climacon_cloud_fog_alt_sun,
  Climacon_cloud_fog_moon,
  Climacon_cloud_fog_sun,
  Climacon_cloud_hail_alt_moon,
  Climacon_cloud_hail_alt_sun,
  Climacon_cloud_lightning_moon,
  Climacon_cloud_lightning_sun,
  Climacon_cloud_moon,
  Climacon_cloud_rain_alt_moon,
  Climacon_cloud_rain_alt_sun,
  Climacon_cloud_rain_moon,
  Climacon_cloud_rain_sun,
  Climacon_cloud_snow_alt_moon,
  Climacon_cloud_snow_alt_sun,
  Climacon_cloud_snow_moon,
  Climacon_cloud_snow_sun,
  Climacon_cloud_sun,
  Climacon_moon,
  Climacon_sun,
  Climacon_tornado,
  Climacon_unknown,
} from "@/assets/images/icons/weatherIcons";

const convertIcons = (weatherCode: number, day: boolean = true) => {
  let icon = "";
  switch (weatherCode) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      icon = day ? Climacon_cloud_lightning_sun : Climacon_cloud_lightning_moon;
      break;

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      icon = day ? Climacon_cloud_drizzle_sun : Climacon_cloud_drizzle_moon;
      break;

    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      icon = day ? Climacon_cloud_rain_sun : Climacon_cloud_rain_moon;
      break;

    case 511:
      icon = day ? Climacon_cloud_hail_alt_sun : Climacon_cloud_hail_alt_moon;
      break;

    case 520:
    case 521:
    case 522:
    case 531:
      icon = day ? Climacon_cloud_rain_alt_sun : Climacon_cloud_rain_alt_moon;
      break;

    case 600:
      icon = day ? Climacon_cloud_snow_sun : Climacon_cloud_snow_moon;
      break;

    case 601:
    case 602:
      icon = day ? Climacon_cloud_snow_alt_sun : Climacon_cloud_snow_alt_moon;
      break;

    case 611:
    case 612:
    case 615:
    case 616:
      icon = day ? Climacon_cloud_hail_alt_sun : Climacon_cloud_hail_alt_moon;
      break;

    case 620:
    case 621:
    case 622:
      icon = day ? Climacon_cloud_snow_sun : Climacon_cloud_snow_moon;
      break;

    case 701:
      icon = day ? Climacon_cloud_fog_sun : Climacon_cloud_fog_moon;
      break;

    case 711:
      icon = day ? Climacon_cloud_fog_alt_sun : Climacon_cloud_fog_alt_moon;
      break;

    case 721:
    case 741:
    case 761:
    case 771:
    case 781:
      icon = day ? Climacon_cloud_fog_sun : Climacon_cloud_fog_moon;
      break;

    case 731:
    case 751:
      icon = Climacon_tornado;
      break;

    case 800:
      icon = day ? Climacon_sun : Climacon_moon;
      break;

    case 801:
    case 802:
    case 803:
    case 804:
      icon = day ? Climacon_cloud_sun : Climacon_cloud_moon;
      break;

    default:
      icon = Climacon_unknown;
      break;
  }

  return icon;
};

export default convertIcons;
