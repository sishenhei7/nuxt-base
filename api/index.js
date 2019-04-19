/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from './utils'

const urlPrefix = '/api/common'
const urls = {
  // users
  readMe: '/users/me',
  readUser: '/users/<id>'
}

Object.keys(urls).map((url) => {
  urls[url] = urlPrefix + urls[url]
  return url
})

export default new function API() {
  // users
  this.readMe = () => request.get(urls.readMe)
  this.readUser = id => request.get(urls.readUser.replace('<id>', id))
}()
