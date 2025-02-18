import type { INotionBlock } from '~/models'

export interface NotionDate {
  start?: string
  end?: string
}

export interface NotionPageCover {
  url?: string
}

export interface NotionPage<T = any> {
  id?: string
  cover?: NotionPageCover
  blocks?: INotionBlock[]
  properties: T
  url?: string
  last_edited_time?: string
}

export interface HitNotion {
  _id?: string
  _highlight?: any
  blockstring?: string
  page?: NotionPage
  fields?: { [key: string]: string[] }
  inner_hits?: {
    [key: string]: {
      hits: {
        total: any
        hits: any
      }
    }
  }
}
