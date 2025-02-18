import type { HitNotion, NotionPage } from './notion'
import type { NotionProviderPageProperties } from './notion-providers'
import type { NotionWebsitePageProperties } from './notion-website'

export interface NotionSpecialtyPageProperties {
  Slug?: string
  Providers?: NotionPage<NotionProviderPageProperties>[]
  _id?: string
  Contents?: NotionPage<NotionWebsitePageProperties>[]
}

export interface HitNotionSpecialty extends HitNotion {
  page?: NotionPage<NotionSpecialtyPageProperties>
}
