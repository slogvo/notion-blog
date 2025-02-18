export interface MenuItem {
  label: string
  icon?: string
  root?: boolean
  image?: string
  subtext?: string
  route?: string
  command?: () => void
  items?: MenuItem[][] | MenuItem[]
}
