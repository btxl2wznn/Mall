import {request} from "./request.js"

export function getHomeMultidata() {
  return request({
    url:  '/home/multidata',
  //url:  '/api/hy/home/multidata',
  //url:  '/api/wh/home/multidata',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
