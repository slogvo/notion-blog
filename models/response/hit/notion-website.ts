import type { HitNotion, NotionDate, NotionPage } from './notion'

export interface NotionWebsitePageProperties {
  Contributors?: any[]
  Created?: string
  Keywords?: any[]
  Labels?: any[]
  Locale?: string
  Name?: string
  Sapo?: string
  Site?: string
  Slug?: string
  Status?: string
  PublishedAt?: NotionDate
  SubItem?: any[]
  Translation?: any[]
  Type?: string
  'Last edited time'?: string
  'Meta Description'?: string
  'Parent item'?: NotionPage<NotionWebsitePageProperties>[]
}

export interface HitNotionWebsite extends HitNotion {
  page?: NotionPage<NotionWebsitePageProperties>
}
