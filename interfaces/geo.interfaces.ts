export interface IGeo {
  data: IGeoData[]
  link: {
    href: string
    ref: string
  }[]
  metadata: {
    currentOffset: number
    totalCount: number
  }
}

export interface IGeoData {
  country: string
  countryCode: string
  id: number
  latitude: number
  longitude: number
  name: string
  population: number
  region: string
  regionCode: string
  regionWdId: string
  type: string
  wikiDataId: string
}
