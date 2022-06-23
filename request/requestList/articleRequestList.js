let prefix = '/article/'
export const articleReques = [
  {
    name:'allArticle',
    url:prefix + 'all',
    method:'get'
  },
  {
    name:'getArticle',
    url:prefix + ':articleId/:testId',
    method:'get'
  }
]
