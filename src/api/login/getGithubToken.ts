import { Request, Response } from 'express'
import { ApiPost, ApiGet } from '../../utils/request'
import { Params, ResponseData } from './types'
import dotenv from 'dotenv'

const config = dotenv.config().parsed

const params: Params = {
  client_id: config!.CLIENT_ID,
  client_secret: config!.CLIENT_SECRET,
  code: '',
}

const responseData: ResponseData = {
  statusCode: 2000,
  message: 'success',
  data: null,
}

const setResponseData = (newData: ResponseData) => {
  responseData.statusCode = newData.statusCode
  responseData.message = newData.message
  responseData.data = newData.data
}

export const getGithubToken = {
  GitToken: async (req: Request, res: Response) => {
    // 获取GitHub code
    params.code = String(req.query.code)

    // 获取GitHub token
    let token = ''
    try {
      const data = await ApiPost('https://github.com/login/oauth/access_token', params)
      token = data.data.split('&')[0].split('=')[1]
    } catch (e: any) {
      setResponseData({ statusCode: 5001, message: '获取GitHub token失败', data: null })
    }

    // 获取用户信息
    try {
      // 获取access_token
      const userData = await ApiGet('https://api.github.com/user', {
        headers: {
          'Authorization': 'token ' + token
        }
      })

      // 处理请求结果
      if (userData.status === 200 && userData.data.login) {
        // 用户信息比对
        if (userData.data.id != config!.USER_ID)
          setResponseData({ statusCode: 4003, message: '用户信息不匹配', data: null })
        else
          setResponseData({
            statusCode: 2000,
            message: 'success',
            data: {
              login: userData.data.login,
              id: userData.data.id,
              token: token,
              avatar_url: userData.data.avatar_url,
            }
          })
      } else
        setResponseData({ statusCode: 4001, message: '获取用户信息失败', data: null })
    } catch (e: any) {
      setResponseData({ statusCode: 5002, message: '无效token', data: null })
    }

    res.send(responseData)
  }
}