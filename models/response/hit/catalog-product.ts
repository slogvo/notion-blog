interface IAvatar {
  _id: string
  name: string
  url: string
}

interface ISpecialty {
  en: {
    title: string[]
  }
  fr: {
    title: string[]
  }
  slug: string[]
  vi: {
    title: string[]
  }
}

interface IProvider {
  _id: string
  avatar: IAvatar
  firstname: string
  highlight: string
  lastname: string
  minuteAvg: number
  name: string
  order: number
  ratingGood: number
  slot: number[]
  slug: string
  specialty: ISpecialty
  spoken: string[]
  title: string
  yearsofEXP: number
}

interface IOutput {
  provider: IProvider
}

export interface HitCatalogProduct {
  output: IOutput
}
