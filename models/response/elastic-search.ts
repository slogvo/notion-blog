export interface ResponseElasticSearch<T> {
  body: {
    hits: {
      hits: Array<T>
      total: {
        value: number
      }
    }
  }
}
