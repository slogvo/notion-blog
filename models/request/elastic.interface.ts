export type TElasticIndex =
  | 'content'
  | 'product'
  | 'ratings'
  | 'banners'
  | 'providers'
  | 'specialties'
  | 'ratings-homepage'
export interface IHighlight {
  boundary_chars?: string
  boundary_max_scan?: number
  fields?: {
    [key: string]: IHighlight
  }
  fragment_size?: number
  number_of_fragments?: number
  pre_tags?: Array<string>
  post_tags?: Array<string>
  require_field_match?: boolean
}

export interface IFilter {
  term?: Record<string, any>
  wildcard?: Record<string, any>
  range?: Record<string, any>
  bool?: Record<string, any>
}

export interface IMultiMatch {
  query: string
  fields: string[]
}
export interface IMust {
  multi_match?: IMultiMatch
  term?: Record<string, any>
  wildcard?: Record<string, any>
}

export interface IShould {
  multi_match?: IMultiMatch
  term?: Record<string, any>
  wildcard?: Record<string, any>
  match?: Record<string, any>
}

type TSortOrder = 'desc' | 'asc'
export interface ISortObject {
  [key: string]: TSortOrder
}
export type TSort = string | ISortObject

export interface ISource {
  excludes?: string[]
  includes?: string[]
}

interface IBool {
  must?: IMust[]
  filter?: IFilter[]
  should?: IMust[]
}
export interface IFunctionScore {
  random_score?: {
    seed: number
    field: '_seq_no' | string
  }
  query?: { bool: IBool }
}

export interface RequestElasticSearch {
  from?: number
  size?: number
  sort?: TSort[]
  query?: {
    function_score?: IFunctionScore
    bool?: IBool
    must?: IMust[]
    filter?: IFilter[]
    should?: IMust[]
  }
  highlight?: IHighlight
  _source?: ISource
}
