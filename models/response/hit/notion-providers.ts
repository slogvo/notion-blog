import type { HitNotion, NotionDate, NotionPage } from './notion'
import type { NotionSpecialtyPageProperties } from './notion-specialties'
import type { NotionWebsitePageProperties } from './notion-website'

export interface NotionProviderPageProperties {
  Status?: 'Active' | 'Inactive'
  Slug?: string
  Name?: string
  Avatar?: any
  Title?: 'Tlg' | 'Bs'
  Joined?: NotionDate
  StartWork?: NotionDate
  Rating: number
  Created?: NotionDate
  Gender?: 'Female' | 'Male'
  _id?: string
  Contents?: NotionPage<NotionWebsitePageProperties>[]
  Specialties?: NotionPage<NotionSpecialtyPageProperties>[]
  Services?: string[]
}

export interface ProviderOutput {
  meta?: {
    minuteAvg?: number
    ratingGood?: number
  }
}
export interface HitNotionProviders extends HitNotion {
  page?: NotionPage<NotionProviderPageProperties>
  output?: ProviderOutput
}
