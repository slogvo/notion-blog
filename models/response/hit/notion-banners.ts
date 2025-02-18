import type { IEmbed } from '~/models'
import type { HitNotion, NotionDate, NotionPage } from './notion'
/**
 * Defines the possible positions for the Banner component.
 */
export type BannerPosition =
  /**
   * A floating banner that appears over the content, typically used for alerts or notifications.
   */
  | 'popup'

  /**
   * A banner fixed to the top of the page.
   */
  | 'top'

  /**
   * A banner fixed to the bottom of the page.
   */
  | 'bottom'

  /**
   * A banner fixed to the left side of the page.
   */
  | 'left'

  /**
   * A banner fixed to the right side of the page.
   */
  | 'right'

  /**
   * A banner fixed to the top-left corner of the page.
   */
  | 'top-left'

  /**
   * A banner fixed to the top-right corner of the page.
   */
  | 'top-right'

  /**
   * A banner fixed to the bottom-left corner of the page.
   */
  | 'bottom-left'

  /**
   * A banner fixed to the bottom-right corner of the page.
   */
  | 'bottom-right'

  /**
   * A banner centered on the page, often used for modal dialogs or important messages.
   */
  | 'center'

type Platform = 'android' | 'ios' | 'web'
type BannerApp = 'aia.khamtuxa.vn' | 'khamtuxa.vn'
type BannerStatus = 'Done' | 'In progress' | 'Not started'

export interface NotionBannersPageProperties {
  Title?: string
  Valid?: NotionDate
  Position: BannerPosition
  Platforms: Platform[]
  App?: BannerApp
  Weight: number
  Condition: string
  Target: string
  Files: IEmbed[]
  Status: BannerStatus
}

export interface HitNotionBanners extends HitNotion {
  page?: NotionPage<NotionBannersPageProperties>
}
