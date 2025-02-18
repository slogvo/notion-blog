import type { HitNotion, NotionPage } from './notion'

export interface NotionRatingsPageProperties {
  RatingByName?: string
  Rating?: number
  Comment?: string
  Provider?: string
  RatingByGender?: string
  RatingByAvatar?: {
    url: string
  }
  CreatedAt: {
    start: string
  }
}

export interface HitNotionRatings extends HitNotion {
  page?: NotionPage<NotionRatingsPageProperties>
}
