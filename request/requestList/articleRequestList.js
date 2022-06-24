let prefix = '/article/'
export const articleReques = [
  {
    name:'createArticle',
    url:prefix + 'create',
    method:'post',
    defaultHeaders: {
      where:'createArticle',
    },
    defaultPayload : {
      time:11,
    }
  },
  {
    name:'getArticle',
    url:prefix + ':articleId',
    method:'get',
    defaultHeaders:{
      time:'here'
    }
  }
]
