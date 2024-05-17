export interface IWeatherForecast {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust?: number
  pop: number
  rain?: {
    '1h': number
  }
  snow?: {
    '1h': number
  }
  weather: IWeather[]
}

export interface IWeatherOneCall {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Omit<IWeatherForecast, 'pop'>
  minutely: {
    dt: number
    precipitation: number
  }[]
  hourly: Omit<IWeatherForecast, 'sunrise' | 'sunset'>[]
  daily: (Omit<IWeatherForecast, 'visibility' | 'temp' | 'feels_like' | 'rain' | 'snow'> & {
    moonrise: number
    moonset: number
    moon_phase: number
    summary: string
    temp: {
      day: number
      min: number
      max: number
      night: number
      eve: number
      morn: number
    }
    feels_like: {
      day: number
      night: number
      eve: number
      morn: number
    }
    rain?: number
    snow?: number
  })[]
  alerts?: [
    {
      sender_name: string
      event: string
      start: number
      end: number
      description: string
      tags: string[]
    }
  ]
}

export interface IWeather {
  description: string
  icon: string
  id: number
  main: string
}

export interface ICoord {
  lon: number
  lat: number
}

export interface IWeatherCurrent {
  coord: ICoord
  weather: IWeather[]
  base: string
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  }
  visibility: number
  wind: { speed: number; deg: number; gust: number }
  clouds: { all: number }
  rain?: {
    '1h': number
    '3h': number
  }
  snow?: {
    '1h': number
    '3h': number
  }
  dt: number
  sys: { country: string; id: number; sunrise: number; sunset: number; type: number }
  timezone: number
  id: number
  name: string
  cod: number
}
