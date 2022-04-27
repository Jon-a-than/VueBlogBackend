import axios from 'axios'

const ApiGet = (url: string, params: any, config?: any) => {
  return axios.get(url, {
    ...params,
    ...config
  })
}

const ApiPost = (url: string, data: any, config?: any) => {
  return axios.post(url, data, config)
}


export { ApiPost, ApiGet }